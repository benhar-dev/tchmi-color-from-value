var TcHmi;!function(e){let r;!function(r){let t;!function(r){r.EventClassesProvider=function(r,t,s){let a=[];switch(r.type){case e.Server.Events.Type.Message:a.push("message");break;case e.Server.Events.Type.Alarm:a.push("alarm")}if(e.Server.Events.isMessage(r)||e.Server.Events.isAlarm(r))switch(r.severity){case e.Server.Events.Severity.Verbose:a.push("verbose");break;case e.Server.Events.Severity.Info:a.push("info");break;case e.Server.Events.Severity.Warning:a.push("warning");break;case e.Server.Events.Severity.Error:a.push("error");break;case e.Server.Events.Severity.Critical:a.push("critical")}if(e.Server.Events.isAlarm(r)){switch(r.alarmState){case e.Server.Events.AlarmState.Raised:a.push("raised");break;case e.Server.Events.AlarmState.Confirmed:a.push("confirmed");break;case e.Server.Events.AlarmState.Cleared:a.push("cleared");break;case e.Server.Events.AlarmState.ClearedAndConfirmed:a.push("cleared-and-confirmed");break;case e.Server.Events.AlarmState.Invalid:a.push("invalid")}r.confirmationState!==e.Server.Events.ConfirmationState.NotRequired&&r.confirmationState!==e.Server.Events.ConfirmationState.NotSupported||a.push("no-confirmation-needed")}return a}}(t=r.Beckhoff||(r.Beckhoff={})),r.registerFunctionEx("EventClassesProvider","TcHmi.Controls.Beckhoff.TcHmiEventGrid",t.EventClassesProvider)}(r=e.Functions||(e.Functions={}))}(TcHmi||(TcHmi={}));