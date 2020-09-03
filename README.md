# Example of converting an int (enum) to a color value

## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## Overview
Super simple worked example of using a function to determin which color to give to an elipse in a datagrid. 

The Javascript code is here
```javascript
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var hmi;
        (function (hmi) {
            function ColorFromValue(myValue) {

                var myColorObject = {};
        
                switch (myValue) {
                    case 1:
                        myColorObject.color = "Blue";
                        break;
                    case 2:
                        myColorObject.color = "RGB(140,70,255)";
                        break;
                    default:
                        myColorObject.color = "#11CCCC";
                }

                return myColorObject

            }
            hmi.ColorFromValue = ColorFromValue;
        })(hmi = Functions.hmi || (Functions.hmi = {}));
        Functions.registerFunctionEx('ColorFromValue', 'TcHmi.Functions.hmi', hmi.ColorFromValue);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
```

## Install 
Not required.  Simply open the project.

## TwinCAT
This project uses TcXaeShell 3.1.4024.10 and TwinCAT HMI 1.12.742.0

## Getting started
This is not a guide for TcXaeShell, please visit http://beckhoff.com/ for further guides