<h1 style='color:blue'>
How to set up SparkAPI for arduino
</h1>
<hr>

## 1 - Copy the code from SparklesAPI.ino

Get the code from V-Latest
[or click here.](https://github.com/sparkles)

Press 'Raw'and then copy everything
(ctrl+a,ctrl+c)(cmd+a,cmd+c)

## 2 - Setting up the script

Press the '...' button

Press 'New Tab'

A window should popup, click the textbox.

Enter 'SparklesAPI' in the textbox

Press OK

## 3 - Pasting the script

<bold>
To paste the script it can depend on what device you are using.
</bold>
<hr>
<h5 style='font-weight:500'>Windows</h5>

Use ctrl+v

OR

Use shift+insert

<hr>
<h5 style='font-weight:500'>Linux systems</h5>

Use shift+insert

<hr>
<h5 style='font-weight:500'>MacOS</h5>

Use cmd+v

OR

Use shift+insert

<hr>

## 4 - calling functions from sparklesAPI

<bold>
To run a function in sparklesAPI use the following(s)

1:

```ino
(this does not work right now.)
sparklesapi.[function]();
sparklesapi.pi();
```

<p style='color:red;font-weight:1000;'>
OR
</p>

```ino
spark_[function]();
spark_pi();
```
