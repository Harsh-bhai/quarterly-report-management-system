# 1. Basic Shell Scripts

## a. Write a shell script to demonstrate the values obtained by basic arithmetic operators.

### CODE :

```bash
#!/bin/bash

# Shell script to demonstrate basic arithmetic operators

echo "Enter two numbers:"
read num1 num2

# Addition
sum=$((num1 + num2))
echo "Sum: $sum"

# Subtraction
diff=$((num1 - num2))
echo "Difference: $diff"

# Multiplication
product=$((num1 * num2))
echo "Product: $product"

# Division
quotient=$((num1 / num2))
echo "Quotient: $quotient"

# Modulus
remainder=$((num1 % num2))
echo "Remainder: $remainder"

```




## b. Write a shell script to calculate simple interest and basic compound interest using bc command.

### CODE :

```bash
#!/bin/bash

# Shell script to calculate simple interest and basic compound interest

echo "Enter principal amount:"
read principal

echo "Enter rate of interest:"
read rate

echo "Enter time period (in years):"
read time

# Calculate Simple Interest
simple_interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
echo "Simple Interest: $simple_interest"

# Calculate Compound Interest
compound_interest=$(echo "$principal * (1 + $rate / 100)^$time - $principal" | bc)
echo "Compound Interest: $compound_interest"

```




## c. Write a shell script to convert distance given in kilometers into feet, yard and miles.

### CODE :

```bash
#!/bin/bash

# Shell script to convert distance given in kilometers into feet, yard, and miles

echo "Enter distance in kilometers:"
read distance_km

# Conversion factors
feet_conversion=3280.84
yard_conversion=1093.61
mile_conversion=0.621371

# Perform conversions
distance_feet=$(echo "$distance_km * $feet_conversion" | bc)
distance_yard=$(echo "$distance_km * $yard_conversion" | bc)
distance_mile=$(echo "$distance_km * $mile_conversion" | bc)

# Display results
echo "Distance in feet: $distance_feet feet"
echo "Distance in yard: $distance_yard yards"
echo "Distance in miles: $distance_mile miles"

```




## d. Write a shell script to convert temperature given in Fahrenheit into Celsius

### CODE :

```bash
#!/bin/bash

# Shell script to convert temperature given in Fahrenheit into Celsius

echo "Enter temperature in Fahrenheit:"
read temp_f

# Conversion formula
temp_c=$(echo "scale=2; ($temp_f - 32) * 5/9" | bc)
echo "Temperature in Celsius: $temp_c °C"

```




# 2. Shell Script Conditionals Branching in BASH

## a. Write a shell script to that inputs cost price and selling price of an item and prints whether it's a loss or a profit or no loss or no profit.

### CODE:

```bash
#!/bin/bash

# Shell script to determine profit or loss

echo "Enter cost price:"
read cost_price

echo "Enter selling price:"
read selling_price

# Calculate profit or loss
profit_loss=$((selling_price - cost_price))

if [ $profit_loss -gt 0 ]; then
    echo "Profit: $profit_loss"
elif [ $profit_loss -lt 0 ]; then
    echo "Loss: $((profit_loss * -1))"
else
    echo "No Profit, No Loss"
fi

```




## b. Write a shell script to enter marks of 5 subjects of a student and display the grade on bellow mentioned criterion:

### i. First division : percentage >= 60%

### ii. Second division : 50% <= percentage < 60%

### iii. Third division : 40% <= percentage < 50%

### iv. Fail : percentage < 40

### CODE:

```bash
#!/bin/bash

echo "Enter marks for 5 subjects:"

read -p "Subject 1: " subject1
read -p "Subject 2: " subject2
read -p "Subject 3: " subject3
read -p "Subject 4: " subject4
read -p "Subject 5: " subject5

# Calculate percentage
total_marks=$((subject1 + subject2 + subject3 + subject4 + subject5))
percentage=$(echo "scale=2; $total_marks / 5" | bc)

# Display percentage
echo "Percentage: $percentage%"

# Display grade based on criteria
if (( $(echo "$percentage >= 60" | bc -l) )); then
    echo "Grade: First Division"
elif (( $(echo "$percentage >= 50 && $percentage < 60" | bc -l) )); then
    echo "Grade: Second Division"
elif (( $(echo "$percentage >= 40 && $percentage < 50" | bc -l) )); then
    echo "Grade: Third Division"
else
    echo "Grade: Fail"
fi


```




## c. Write a shell script to find greatest out of four numbers.

### CODE:

```bash
#!/bin/bash

# Shell script to find the greatest among four numbers

echo "Enter four numbers (separated by space):"
read num1 num2 num3 num4

max=$num1

if [ $num2 -gt $max ]; then
    max=$num2
fi

if [ $num3 -gt $max ]; then
    max=$num3
fi

if [ $num4 -gt $max ]; then
    max=$num4
fi

echo "The greatest number is: $max"

```




## d. Write a shell script to check whether the entered character is an upper case, a lower case, digit or any special symbol.

### CODE:

```bash
#!/bin/bash

# Shell script to check the type of entered character

echo "Enter a character:"
read char

if [[ "$char" =~ [A-Z] ]]; then
    echo "Entered character is an uppercase letter."
elif [[ "$char" =~ [a-z] ]]; then
    echo "Entered character is a lowercase letter."
elif [[ "$char" =~ [0-9] ]]; then
    echo "Entered character is a digit."
else
    echo "Entered character is a special symbol."
fi

```




# 3. Shell Script on case and loop 
## a. Write a shell script to calculate sum of digits of a number.

### CODE:

```bash
#!/bin/bash

# Shell script to calculate sum of digits of a number

echo "Enter a number:"
read number

sum=0

while [ $number -gt 0 ]; do
    digit=$((number % 10))
    sum=$((sum + digit))
    number=$((number / 10))
done

echo "Sum of digits: $sum"

```



## b. Write a shell script to print reverse of any number.

### CODE:

```bash
#!/bin/bash

# Shell script to print reverse of a number

echo "Enter a number:"
read number

reverse=0

while [ $number -gt 0 ]; do
    digit=$((number % 10))
    reverse=$((reverse * 10 + digit))
    number=$((number / 10))
done

echo "Reverse of the number: $reverse"

```



## c. Write a shell script to print whether the number is palindrome or not.

### CODE:

```bash
#!/bin/bash

# Shell script to print whether the number is palindrome or not

echo "Enter a number:"
read number

original=$number
reverse=0

while [ $number -gt 0 ]; do
    digit=$((number % 10))
    reverse=$((reverse * 10 + digit))
    number=$((number / 10))
done

if [ $original -eq $reverse ]; then
    echo "The number is a palindrome."
else
    echo "The number is not a palindrome."
fi

```



## d. Write a menu based shell script to display: (i) List of files (ii) Current date (iii) Total number of files in current directory (iv) List of users currently logged in (v) Path of current directory

### CODE:

```bash
#!/bin/bash

while true; do
    echo "Menu:"
    echo "1. List of files"
    echo "2. Current date"
    echo "3. Total number of files in current directory"
    echo "4. List of users currently logged in"
    echo "5. Path of current directory"
    echo "6. Exit"

    read -p "Enter your choice (1-6): " choice

    case $choice in
        1)
            echo "List of files:"
            ls
            ;;
        2)
            echo "Current date:"
            date
            ;;
        3)
            echo "Total number of files in current directory:"
            num_files=$(ls -l | grep "^-" | wc -l)
            echo "Total files: $num_files"
            ;;
        4)
            echo "List of users currently logged in:"
            who
            ;;
        5)
            echo "Path of current directory:"
            pwd
            ;;
        6)
            echo "Exiting the script. Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please enter a number from 1 to 6."
            ;;
    esac

    echo "----------------------------------------"
done

```



