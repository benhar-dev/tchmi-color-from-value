// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.0/runtimes/native1.12-tchmi/TcHmi.d.ts" />
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