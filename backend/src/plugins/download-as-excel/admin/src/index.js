import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import DownloadButton from './components/download';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import(/* webpackChunkName: "[request]" */ './pages/App');

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
    app.injectContentManagerComponent('listView', 'actions', {
      name: 'download-as-excel',
      Component: DownloadButton,
    });
  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};

// ("http://localhost:1337/content-manager/collection-types/plugin::users-permissions.user?page=1&pageSize=10&sort=username:ASC&filters[$and][0][id][$eq]=1&filters[$and][1][id][$ne]=2&filters[$and][2][username][$eq]=batman"

// http://localhost:8000/admin/content-manager/collectionType/plugin::users-permissions.user?page=1&pageSize=10&sort=username:ASC

// http://localhost:1337/content-manager/collection-types/plugin::users-permissions.user?page=1&pageSize=10&sort=username:ASC

// changes : collectionType to collection-types
// remove admin

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1ODMwNzU0LCJleHAiOjE2OTg0MjI3NTR9.neOlJg9WCnvkYt4rckP_AFVkgROglLNUZyg78eetnFQ
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1ODMwOTk0LCJleHAiOjE2OTg0MjI5OTR9.WbnGRDF46HXwC66h35yjoH4aHEc76HFSx7V8vMTNiWE