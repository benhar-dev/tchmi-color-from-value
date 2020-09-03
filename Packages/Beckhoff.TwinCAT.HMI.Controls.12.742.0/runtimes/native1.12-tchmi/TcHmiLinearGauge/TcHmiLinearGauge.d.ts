declare module TcHmi {
    module Controls.Beckhoff {
        class TcHmiLinearGauge extends System.TcHmiControl {
            constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
            protected __themeDataLoadedEventDestroyEvent: DestroyFunction | null;
            /** Reference to the root dom element of the current control template as jquery object. */
            protected __elementTemplateRoot: JQuery;
            /** Reference to the track element of the current control template as jquery object. */
            protected __elementTrack: JQuery;
            /** Reference to the filler element of the current control template as jquery object. */
            protected __elementFiller: JQuery;
            /** Reference to the knob HTMLDivElement of the current control template as jquery object. */
            protected __elementKnob: JQuery;
            /** Reference to the knob HTMLDivElement. */
            protected __elementKnobDiv: HTMLDivElement;
            protected __knobXhr: XMLHttpRequest | undefined;
            protected __knobXhrUrl: string | undefined;
            protected __knobSvgString: string | null;
            /** Reference to the label container element of the current control template as jquery object. */
            protected __elementLabels: JQuery;
            /** Reference to the tick containter element of the current control template as jquery object. */
            protected __elementTicks: JQuery;
            /** Reference to the value containter element of the current control template as jquery object. */
            protected __elementValueContent: JQuery;
            /** Reference to the hidden min value containter element of the current control template as jquery object. */
            protected __elementValueHiddenMin: JQuery;
            /** Reference to the hidden max value containter element of the current control template as jquery object. */
            protected __elementValueHiddenMax: JQuery;
            /** Reference to the unit containter element of the current control template as jquery object. */
            protected __elementUnitContent: JQuery;
            /** Reference to the range containter element of the current control template as jquery object. */
            protected __elementRange: JQuery;
            /** Internal reference to the attribute 'data-tchmi-value' */
            protected __value: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-min-value' */
            protected __minValue: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-max-value' */
            protected __maxValue: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-step' */
            protected __step: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-start-from-zero' */
            protected __startFromZero: boolean | undefined;
            /** Internal reference to the attribute 'data-tchmi-editable' */
            protected __editable: boolean | undefined;
            /** Internal reference to the attribute 'data-tchmi-click-anywhere-to-edit' */
            protected __clickAnywhereToEdit: boolean | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-format' */
            protected __valueFormat: TcHmi.IFunction | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-show-label' */
            protected __showLabels: boolean | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-range' */
            protected __labelRange: number | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-format' */
            protected __labelFormat: TcHmi.IFunction | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-show-ticks' */
            protected __showTicks: boolean | undefined;
            /** Internal reference to the attribute 'data-tchmi-tick-definition' */
            protected __tickDefinition: TcHmiLinearGauge.TickDefinition | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-position' */
            protected __labelPosition: 'Top' | 'Bottom' | 'Left' | 'Right' | undefined;
            /** Internal reference to the attribute 'data-tchmi-show-value-text' */
            protected __showValueText: boolean | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit' */
            protected __unit: string | undefined;
            /** Internal reference to the attribute 'data-tchmi-range' */
            protected __range: TcHmiLinearGauge.Range[] | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-orientation' */
            protected __orientation: 'Horizontal' | 'Vertical' | undefined;
            /** Internal reference to the attribute 'data-tchmi-padding' */
            protected __padding: TcHmi.FourSidedCss | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-base-animation-time' */
            protected __baseAnimationTime: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-font-size' */
            protected __valueFontSize: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-font-size-unit' */
            protected __valueFontSizeUnit: FontSizeUnit | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-font-family' */
            protected __valueFontFamily: FontFamily | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-font-style' */
            protected __valueFontStyle: FontStyle | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-font-weight' */
            protected __valueFontWeight: FontWeight | undefined;
            /** Internal reference to the attribute 'data-tchmi-value-color' */
            protected __valueColor: TcHmi.SolidColor | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-font-size' */
            protected __labelFontSize: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-font-size-unit' */
            protected __labelFontSizeUnit: FontSizeUnit | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-font-family' */
            protected __labelFontFamily: FontFamily | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-font-style' */
            protected __labelFontStyle: FontStyle | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-font-weight' */
            protected __labelFontWeight: FontWeight | undefined;
            /** Internal reference to the attribute 'data-tchmi-label-color' */
            protected __labelColor: TcHmi.SolidColor | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-font-size' */
            protected __unitFontSize: number | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-font-size-unit' */
            protected __unitFontSizeUnit: FontSizeUnit | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-font-family' */
            protected __unitFontFamily: FontFamily | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-font-style' */
            protected __unitFontStyle: FontStyle | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-font-weight' */
            protected __unitFontWeight: FontWeight | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-orientation' */
            protected __unitOrientation: 'Theme' | 'Horizontal' | 'Vertical' | undefined;
            /** Internal reference to the attribute 'data-tchmi-unit-color' */
            protected __unitColor: TcHmi.SolidColor | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-tick-color' */
            protected __tickColor: TcHmi.Color | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-filler-color' */
            protected __progressBackgroundColor: TcHmi.Color | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-filler-color' */
            protected __progressForegroundColor: TcHmi.Color | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-knob-color' */
            protected __knobColor: TcHmi.Color | null | undefined;
            /** Internal reference to the attribute 'data-tchmi-knob-arrows-color' */
            protected __knobArrowsColor: TcHmi.SolidColor | null | undefined;
            /** Stores information about the current drag operation */
            protected __draggingInfo: {
                isDragging: boolean;
                offset: number;
                touchIdentifier: number | null;
                originalValue: number;
                knobConfig: TcHmiLinearGauge.KnobConfig;
            };
            /** Caches the old value when a new value is set */
            protected __oldValue: number;
            /** The animation running on the progress bar */
            protected __progressBarAnimation: Animation | null;
            /** The animation running on the edit knob */
            protected __editKnobAnimation: Animation | null;
            protected __resizedEventDestroyEvent: DestroyFunction | null;
            /** Normalized internal value */
            protected __internalValue: number;
            protected __internalMinValue: number;
            protected __internalMaxValue: number;
            /**
            * If raised, the control object exists in control cache and constructor of each inheritation level was called.
            * Call attribute processor functions here to initialize default values!
            * @function __previnit
            */
            __previnit(): void;
            /**
            * If raised, all attributes have been set to it's default or dom values.
            * @function __init
            */
            __init(): void;
            /**
            * Is called by tachcontrol() after the control instance gets part of the current DOM.
            * Is only allowed to be called from the framework itself!
            * @function
            */
            __attach(): void;
            /**
            * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
            * Is only allowed to be called from the framework itself!
            * @function
            */
            __detach(): void;
            /**
            * Destroy the current control instance.
            * Will be called automatically if system destroys control!
            * @function
            */
            destroy(): void;
            protected __onResized: () => void;
            protected __fetchKnob: () => void;
            /**
            * Resolves a LinearGradientColor object to two string representations for use in a svg fill and defs property.
            * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
            * @param gradientColor The colorObject to resolve.
            * @returns {gradientString: string, fillString: string}
           */
            private __resolveLinearGradientColorAsSvgStrings;
            /**
             * Compiles the knob SVG String and appends the svg to the DOM
             */
            protected __updateKnobColors(): void;
            /**
            * Is called when the mousedown event is raised from the '.TcHmi_Controls_Beckhoff_TcHmiLinearGauge-template-knob' element
            * @function
            * @callback
            */
            protected __onMouseDownKnob: (event: MouseEvent) => void;
            /**
            * Is called when the mousedown event is raised from the control element
            * @function
            * @callback
            */
            protected __onMouseDownControl: (event: MouseEvent) => void;
            /**
            * Is called when the mousemove event is raised from the window
            * @function
            * @callback
            */
            protected __onMouseMove: (event: MouseEvent) => void;
            /**
            * Is called when the mouseup event is raised from the window
            * @function
            * @callback
            */
            protected __onMouseUp: (event: MouseEvent) => void;
            /**
            * Is called when the touchstart event is raised from the '.TcHmi_Controls_Beckhoff_TcHmiLinearGauge-template-knob' element
            * @function
            * @callback
            */
            protected __onTouchStartKnob: (event: TouchEvent) => void;
            /**
            * Is called when the touchstart event is raised from the control element
            * @function
            * @callback
            */
            protected __onTouchStartControl: (event: TouchEvent) => void;
            /**
            * Is called when the touchmove event is raised from the window
            * @function
            * @callback
            */
            protected __onTouchMove: (event: TouchEvent) => void;
            /**
            * Is called when the touchend event is raised from the window
            * @function
            * @callback
            */
            protected __onTouchEnd: (event: TouchEvent) => void;
            /**
            * Is called when the touchcancel event is raised from the window
            * @function
            * @callback
            */
            protected __onTouchCancel: (event: TouchEvent) => void;
            /**
            * Function to calculate the percentage to which the bar would be filled given a specific value.
            * @function
            * @param   {float}    value     -   The value of the slider.
            * @returns {float}
            */
            protected __calculatePercentage(value: number): number;
            /**
            * Function to calculate the value when the bar would be filled to a given percentage.
            * @function
            * @param   {float}    percentage     -   The percentage of the bar that is filled.
            * @returns {float}
            */
            protected __calculateValue(percentage: number): number;
            /**
            * Function to calculate the percentage to which the bar should be filled when the user interacts with the gauge.
            * @function
            * @param   {float}    x     -   The x coordinate of the mouse or touch.
            * @param   {float}    y     -   The y coordinate of the mouse or touch.
            * @returns {float}
            */
            protected __calcValueFromEventCoords(x: number, y: number): number;
            /**
            * Updates the slider, progress bar and value text.
            * @function
            * @param   {float}    value                 -   The value to show.
            * @param   {float}    baseAnimationTime     -   The time an animation from minValue to maxValue should take.
            * @returns {float}
            */
            protected __updateValueVisualization(value: number): void;
            /**
            * Sets __internalMinValue/__inernalMaxValue based on __minValue/__maxValue;
            * @function
            */
            protected __setInternalMinMaxValue(): void;
            /**
            * Sets __internalValue;
            * @function
            */
            protected __setInternalValue(): void;
            /**
            * Sets the value attribute if the user is not currently dragging the slider.
            * @function
            * @param   {number}      valueNew     -   The new value for value.
            */
            setValue(valueNew: number | null): void;
            /**
            * Sets the value attribute.
            * @function
            * @param   {number}      valueNew     -   The new value for value.
            */
            protected __setValue(valueNew: number | null): void;
            /**
            * Returns the current value of value.
            * @function
            * @returns      {number}     The current value of value.
            */
            getValue(): number | undefined;
            /**
            * Processes the current value of attribute value.
            * @function
            */
            protected __processValue(): void;
            /**
            * Sets the minValue attribute.
            * @function
            * @param   {number}      valueNew     -   The new value for minValue.
            */
            setMinValue(valueNew: number | null): void;
            /**
            * Returns the current value of minValue.
            * @function
            * @returns      {number}     The current value of minValue.
            */
            getMinValue(): number | undefined;
            /**
            * Processes the current value of attribute minvalue.
            * @function
            */
            protected __processMinValue(): void;
            /**
            * Sets the maxValue attribute.
            * @function
            * @param   {number}      valueNew     -   The new value for maxValue.
            */
            setMaxValue(valueNew: number | null): void;
            /**
            * Returns the current value of maxValue.
            * @function
            * @returns      {number}     The current value of maxValue.
            */
            getMaxValue(): number | undefined;
            /**
            * Processes the current value of attribute maxvalue.
            * @function
            */
            protected __processMaxValue(): void;
            /**
            * Sets the step attribute.
            * @function
            * @param   {number}      valueNew     -   The new value for step.
            */
            setStep(valueNew: number | null): void;
            /**
            * Returns the current value of step.
            * @function
            * @returns      {number}     The current value of step.
            */
            getStep(): number | undefined;
            /**
            * Processes the current value of attribute step.
            * @function
            */
            protected __processStep(): void;
            /**
            * Sets the start-from-zero attribute.
            * @function
            * @param   {boolean}      valueNew     -   The new value for start-from-zero.
            */
            setStartFromZero(valueNew: boolean | null): void;
            /**
            * Returns the current value of start-from-zero.
            * @function
            * @returns      {boolean}     The current value of start-from-zero.
            */
            getStartFromZero(): boolean | undefined;
            /**
            * Processes the current value of attribute start-from-zero.
            * @function
            */
            protected __processStartFromZero(): void;
            /**
            * Sets the editable attribute.
            * @function
            * @param   {boolean}      valueNew     -   The new value for editable.
            */
            setEditable(valueNew: boolean | null): void;
            /**
            * Returns the current value of editable.
            * @function
            * @returns      {boolean}     The current value of editable.
            */
            getEditable(): boolean | undefined;
            /**
            * Processes the current value of attribute editable.
            * @function
            */
            protected __processEditable(): void;
            /**
            * Sets the clickAnywhereToEdit attribute.
            * @function
            * @param   {boolean}      valueNew     -   The new value for clickAnywhereToEdit.
            */
            setClickAnywhereToEdit(valueNew: boolean | null): void;
            /**
            * Returns the current value of clickAnywhereToEdit.
            * @function
            * @returns      {boolean}     The current value of clickAnywhereToEdit.
            */
            getClickAnywhereToEdit(): boolean | undefined;
            /**
            * Processes the current value of attribute clickAnywhereToEdit.
            * @function
            */
            protected __processClickAnywhereToEdit(): void;
            /**
            * Sets the value of the valueFormat order attribute.
            * @param {Function} value The new valueFormat method.
            * @function
            */
            setValueFormat(valueNew: TcHmi.IFunction | null): void;
            /**
             * The watch callback for the valueFormat object resolver.
             */
            protected __onResolverForValueFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
            /**
             * Gets the current valueFormat method.
             * @returns {Function} the current valueFormat method.
             * @function
             */
            getValueFormat(): IFunction | null | undefined;
            /**
             * Processes the current valueFormat method
             * @function
             */
            protected __processValueFormat(): void;
            /**
             * Executes the current valueFormat function.
             * @param first The first message to compare.
             * @param second The second message to compare.
             */
            private __executeValueFormatFunction;
            /**
            * Sets the showLabels attribute.
            * @function
            * @param   {boolean}      valueNew     -   The new value for showLabels.
            */
            setShowLabels(valueNew: boolean | null): void;
            /**
            * Returns the current value of showLabels.
            * @function
            * @returns      {boolean}     The current value of showLabels.
            */
            getShowLabels(): boolean | undefined;
            /**
            * Processes the current value of attribute showlabels.
            * @function
            */
            protected __processShowLabels(): void;
            /**
            * Sets the labelRange attribute.
            * @function
            * @param   {number}      valueNew     -   The new value for labelRange.
            */
            setLabelRange(valueNew: number | null): void;
            /**
            * Returns the current value of labelRange.
            * @function
            * @returns      {number}     The current value of labelRange.
            */
            getLabelRange(): number | null | undefined;
            /**
            * Processes the current value of attribute labelrange.
            * @function
            */
            protected __processLabelRange(): void;
            /**
            * Sets the value of the labelFormat order attribute.
            * @param {Function} value The new labelFormat method.
            * @function
            */
            setLabelFormat(valueNew: TcHmi.IFunction | null): void;
            /**
             * The watch callback for the labelFormat object resolver.
             */
            protected __onResolverForLabelFormatWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IFunction>) => void;
            /**
             * Gets the current labelFormat method.
             * @returns {Function} the current labelFormat method.
             * @function
             */
            getLabelFormat(): IFunction | null | undefined;
            /**
             * Processes the current labelFormat method
             * @function
             */
            protected __processLabelFormat(): void;
            /**
             * Executes the current labelFormat function.
             * @param first The first message to compare.
             * @param second The second message to compare.
             */
            private __executeLabelFormatFunction;
            /**
            * Sets the showLabels attribute.
            * @function
            * @param   {boolean}      valueNew     -   The new value for showLabels.
            */
            setShowTicks(valueNew: boolean | null): void;
            /**
            * Returns the current value of showLabels.
            * @function
            * @returns      {boolean}     The current value of showLabels.
            */
            getShowTicks(): boolean | undefined;
            /**
            * Processes the current value of attribute showlabels.
            * @function
            */
            protected __processShowTicks(): void;
            /**
            * Sets the tickDefinition attribute.
            * @function
            * @param   {JSON}      valueNew     -   The new value for tickDefinition.
            */
            setTickDefinition(valueNew: TcHmiLinearGauge.TickDefinition | null): void;
            /**
             * The watch callback for the tickDefinition object resolver.
             */
            protected __onResolverForTickDefinitionWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiLinearGauge.TickDefinition>) => void;
            /**
            * Returns the current value of tickDefinition.
            * @function
            * @returns      {JSON}     The current value of tickDefinition.
            */
            getTickDefinition(): TcHmiLinearGauge.TickDefinition | null | undefined;
            /**
            * Processes the current value of attribute tickdefinition.
            * @function
            */
            protected __processTickDefinition(): void;
            /**
            * Sets the labelPosition attribute.
            * @function
            * @param   {string}      valueNew     -   The new value for labelPosition.
            *                                  Possible values: Top, Bottom, Left, Right
            */
            setLabelPosition(valueNew: 'Top' | 'Bottom' | 'Left' | 'Right' | null): void;
            /**
            * Returns the current value of labelPosition.
            * @function
            * @returns      {string}     The current value of labelPosition.
            *                                  Possible values: Top, Bottom, Left, Right
            */
            getLabelPosition(): "Top" | "Bottom" | "Left" | "Right" | undefined;
            /**
            * Processes the current value of attribute labelPosition.
            * @function
            */
            protected __processLabelPosition(): void;
            /**
            * Sets the range attribute.
            * @function
            * @param   {JSON}      valueNew     -   The new value for range.
            */
            setRange(valueNew: TcHmiLinearGauge.Range[] | null): void;
            /**
             * The watch callback for the range object resolver.
             */
            protected __onResolverForRangeWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<TcHmiLinearGauge.Range[]>) => void;
            /**
            * Returns the current value of range.
            * @function
            * @returns      {JSON}     The current value of range.
            */
            getRange(): TcHmiLinearGauge.Range[] | null | undefined;
            /**
            * Processes the current value of attribute range.
            * @function
            */
            protected __processRange(): void;
            /**
            * Sets the showValueText attribute.
            * @function
            * @param   {boolean}      valueNew     -   The new value for showValueText.
            */
            setShowValueText(valueNew: boolean | null): void;
            /**
            * Returns the current value of showValueText.
            * @function
            * @returns      {boolean}     The current value of showValueText.
            */
            getShowValueText(): boolean | undefined;
            /**
            * Processes the current value of attribute showValueText.
            * @function
            */
            protected __processShowValueText(): void;
            /**
            * Sets the unit attribute.
            * @function
            * @param   {string}      valueNew     -   The new value for unit.
            */
            setUnit(valueNew: string | null): void;
            /**
            * Returns the current value of unit.
            * @function
            * @returns      {string}     The current value of unit.
            */
            getUnit(): string | undefined;
            /**
            * Processes the current value of attribute unit.
            * @function
            */
            protected __processUnit(): void;
            /**
            * Sets the orientation attribute.
            * @function
            * @param   {string}      valueNew     -   The new value for orientation.
            *                                  Possible values: Horizontal, Vertical
            */
            setOrientation(valueNew: 'Horizontal' | 'Vertical' | null): void;
            /**
            * Returns the current value of orientation.
            * @function
            * @returns      {string}     The current value of orientation.
            *                                  Possible values: Horizontal, Vertical
            */
            getOrientation(): "Horizontal" | "Vertical" | undefined;
            /**
            * Processes the current value of attribute orientation.
            * @function
            */
            protected __processOrientation(): void;
            /**
            * Sets the padding attribute.
            * @function
            * @param   {string}      valueNew     -   The new value for padding.
            */
            setPadding(valueNew: FourSidedCss | null): void;
            /**
             * The watch callback for the padding object resolver.
             */
            protected __onResolverForPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
            /**
            * Returns the current value of padding.
            * @function
            * @returns      {string}     The current value of padding.
            */
            getPadding(): FourSidedCss | null | undefined;
            /**
            * Processes the current value of attribute padding.
            * @function
            */
            protected __processPadding(): void;
            /**
            * Sets the baseAnimationTime attribute.
            * @function
            * @param   {number}      valueNew     -   The new value for baseAnimationTime.
            */
            setBaseAnimationTime(valueNew: number | null): void;
            /**
            * Returns the current value of baseAnimationTime.
            * @function
            * @returns      {number}     The current value of baseAnimationTime.
            */
            getBaseAnimationTime(): number | undefined;
            /**
            * Processes the current value of attribute baseAnimationTime.
            * @function
            */
            protected __processBaseAnimationTime(): void;
            /**
            * Sets the font size attribute.
            * @function
            * @param   {MeasurementValue}    valueNew     -   The new value for valueFontSize.
            */
            setValueFontSize(valueNew: number | null): void;
            /**
            * Returns the current value of valueFontSize.
            * @function
            * @returns      {MeasurementValue}    The current value of valueFontSize.
            */
            getValueFontSize(): number | undefined;
            /**
            * Processes the current value of attribute textfontsize.
            * @function
            */
            protected __processValueFontSize(): void;
            /**
            * Sets the font size unit attribute.
            * @function
            * @param   {MeasurementUnit}    valueNew     -   The new value for valueFontSizeUnit.
            *                                                Possible Values: px, %
            */
            setValueFontSizeUnit(valueNew: FontSizeUnit | null): void;
            /**
            * Returns the current value of valueFontSizeUnit.
            * @function
            * @returns      {MeasurementUnit}    The current value of valueFontSizeUnit.
            */
            getValueFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
            /**
            * Processes the current value of attribute textfontsizeunit.
            * @function
            */
            protected __processValueFontSizeUnit(): void;
            /**
            * Sets the font family attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for valueFontFamily.
            */
            setValueFontFamily(valueNew: FontFamily | null): void;
            /**
            * Returns the current value of valueFontFamily.
            * @function
            * @returns      {string}    The current value of valueFontFamily.
            */
            getValueFontFamily(): string | null | undefined;
            /**
            * Processes the current value of attribute textfontfamily.
            * @function
            */
            protected __processValueFontFamily(): void;
            /**
            * Sets the font style attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for valueFontStyle.
            */
            setValueFontStyle(valueNew: FontStyle | null): void;
            /**
            * Returns the current value of valueFontStyle.
            * @function
            * @returns      {string}    The current value of valueFontStyle.
            */
            getValueFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
            /**
            * Processes the current value of attribute textfontstyle.
            * @function
            */
            protected __processValueFontStyle(): void;
            /**
            * Sets the font weight attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for valueFontWeight.
            */
            setValueFontWeight(valueNew: FontWeight | null): void;
            /**
            * Returns the current value of valueFontWeight.
            * @function
            * @returns      {string}    The current value of valueFontWeight.
            */
            getValueFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
            /**
            * Processes the current value of attribute textfontweight.
            * @function
            */
            protected __processValueFontWeight(): void;
            /**
            * Sets the text color attribute.
            * @function
            * @param   {SolidColor}    valueNew     -   The new value for valueColor.
            */
            setValueColor(valueNew: SolidColor | null): void;
            /**
             * The watch callback for the valueColor object resolver.
             */
            protected __onResolverForValueColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
            /**
            * Returns the current value of valueColor.
            * @function
            * @returns      {string}    The current value of valueColor.
            */
            getValueColor(): SolidColor | null | undefined;
            /**
            * Processes the current value of attribute valueColor.
            * @function
            */
            protected __processValueColor(): void;
            /**
            * Sets the font size attribute.
            * @function
            * @param   {MeasurementValue}    valueNew     -   The new value for labelFontSize.
            */
            setLabelFontSize(valueNew: number | null): void;
            /**
            * Returns the current value of labelFontSize.
            * @function
            * @returns      {MeasurementValue}    The current value of labelFontSize.
            */
            getLabelFontSize(): number | undefined;
            /**
            * Processes the current value of attribute textfontsize.
            * @function
            */
            protected __processLabelFontSize(): void;
            /**
            * Sets the font size unit attribute.
            * @function
            * @param   {MeasurementUnit}    valueNew     -   The new value for labelFontSizeUnit.
            *                                                Possible Values: px, %
            */
            setLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
            /**
            * Returns the current value of labelFontSizeUnit.
            * @function
            * @returns      {MeasurementUnit}    The current value of labelFontSizeUnit.
            */
            getLabelFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
            /**
            * Processes the current value of attribute textfontsizeunit.
            * @function
            */
            protected __processLabelFontSizeUnit(): void;
            /**
            * Sets the font family attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for labelFontFamily.
            */
            setLabelFontFamily(valueNew: FontFamily | null): void;
            /**
            * Returns the current value of labelFontFamily.
            * @function
            * @returns      {string}    The current value of labelFontFamily.
            */
            getLabelFontFamily(): string | null | undefined;
            /**
            * Processes the current value of attribute textfontfamily.
            * @function
            */
            protected __processLabelFontFamily(): void;
            /**
            * Sets the font style attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for labelFontStyle.
            */
            setLabelFontStyle(valueNew: FontStyle | null): void;
            /**
            * Returns the current value of labelFontStyle.
            * @function
            * @returns      {string}    The current value of labelFontStyle.
            */
            getLabelFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
            /**
            * Processes the current value of attribute textfontstyle.
            * @function
            */
            protected __processLabelFontStyle(): void;
            /**
            * Sets the font weight attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for labelFontWeight.
            */
            setLabelFontWeight(valueNew: FontWeight | null): void;
            /**
            * Returns the current value of labelFontWeight.
            * @function
            * @returns      {string}    The current value of labelFontWeight.
            */
            getLabelFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
            /**
            * Processes the current value of attribute textfontweight.
            * @function
            */
            protected __processLabelFontWeight(): void;
            /**
            * Sets the text color attribute.
            * @function
            * @param   {SolidColor}    valueNew     -   The new value for labelColor.
            */
            setLabelColor(valueNew: SolidColor | null): void;
            /**
             * The watch callback for the labelColor object resolver.
             */
            protected __onResolverForLabelColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
            /**
            * Returns the current value of labelColor.
            * @function
            * @returns      {string}    The current value of labelColor.
            */
            getLabelColor(): SolidColor | null | undefined;
            /**
            * Processes the current value of attribute labelColor.
            * @function
            */
            protected __processLabelColor(): void;
            /**
            * Sets the font size attribute.
            * @function
            * @param   {MeasurementValue}    valueNew     -   The new value for unitFontSize.
            */
            setUnitFontSize(valueNew: number | null): void;
            /**
            * Returns the current value of unitFontSize.
            * @function
            * @returns      {MeasurementValue}    The current value of unitFontSize.
            */
            getUnitFontSize(): number | undefined;
            /**
            * Processes the current value of attribute textfontsize.
            * @function
            */
            protected __processUnitFontSize(): void;
            /**
            * Sets the font size unit attribute.
            * @function
            * @param   {MeasurementUnit}    valueNew     -   The new value for unitFontSizeUnit.
            *                                                Possible Values: px, %
            */
            setUnitFontSizeUnit(valueNew: FontSizeUnit | null): void;
            /**
            * Returns the current value of unitFontSizeUnit.
            * @function
            * @returns      {MeasurementUnit}    The current value of unitFontSizeUnit.
            */
            getUnitFontSizeUnit(): "px" | "%" | "em" | "rem" | undefined;
            /**
            * Processes the current value of attribute textfontsizeunit.
            * @function
            */
            protected __processUnitFontSizeUnit(): void;
            /**
            * Sets the font family attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for unitFontFamily.
            */
            setUnitFontFamily(valueNew: FontFamily | null): void;
            /**
            * Returns the current value of unitFontFamily.
            * @function
            * @returns      {string}    The current value of unitFontFamily.
            */
            getUnitFontFamily(): string | null | undefined;
            /**
            * Processes the current value of attribute textfontfamily.
            * @function
            */
            protected __processUnitFontFamily(): void;
            /**
            * Sets the font style attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for unitFontStyle.
            */
            setUnitFontStyle(valueNew: FontStyle | null): void;
            /**
            * Returns the current value of unitFontStyle.
            * @function
            * @returns      {string}    The current value of unitFontStyle.
            */
            getUnitFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
            /**
            * Processes the current value of attribute textfontstyle.
            * @function
            */
            protected __processUnitFontStyle(): void;
            /**
            * Sets the font weight attribute.
            * @function
            * @param   {string}    valueNew     -   The new value for unitFontWeight.
            */
            setUnitFontWeight(valueNew: FontWeight | null): void;
            /**
            * Returns the current value of unitFontWeight.
            * @function
            * @returns      {string}    The current value of unitFontWeight.
            */
            getUnitFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
            /**
            * Processes the current value of attribute textfontweight.
            * @function
            */
            protected __processUnitFontWeight(): void;
            /**
            * Sets the unit-orientation attribute.
            * @function
            * @param   {string}      valueNew     -   The new value for unit-orientation.
            *                                  Possible values: Theme, Horizontal, Vertical
            */
            setUnitOrientation(valueNew: 'Theme' | 'Horizontal' | 'Vertical' | null): void;
            /**
            * Returns the current value of unit-orientation.
            * @function
            * @returns      {string}     The current value of unit-orientation.
            *                                  Possible values: Theme, Horizontal, Vertical
            */
            getUnitOrientation(): "Horizontal" | "Vertical" | "Theme" | undefined;
            /**
            * Processes the current value of attribute unit-orientation.
            * @function
            */
            protected __processUnitOrientation(): void;
            /**
            * Sets the text color attribute.
            * @function
            * @param   {SolidColor}    valueNew     -   The new value for unitColor.
            */
            setUnitColor(valueNew: SolidColor | null): void;
            /**
             * The watch callback for the unitColor object resolver.
             */
            protected __onResolverForUnitColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
            /**
            * Returns the current value of unitColor.
            * @function
            * @returns      {string}    The current value of unitColor.
            */
            getUnitColor(): SolidColor | null | undefined;
            /**
            * Processes the current value of attribute unitColor.
            * @function
            */
            protected __processUnitColor(): void;
            /**
            * Sets the tick color attribute.
            * @function
            * @param   {Color}    valueNew     -   The new value for tickColor.
            */
            setTickColor(valueNew: Color | null): void;
            /**
             * The watch callback for the tickColor object resolver.
             */
            protected __onResolverForTickColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
            /**
            * Returns the current value of tickColor.
            * @function
            * @returns      {string}    The current value of tickColor.
            */
            getTickColor(): SolidColor | LinearGradientColor | null | undefined;
            /**
            * Processes the current value of attribute textfontweight.
            * @function
            */
            protected __processTickColor(): void;
            /**
            * Sets the progress background color attribute.
            * @function
            * @param   {Color}    valueNew     -   The new value for progressBackgroundColor.
            */
            setProgressBackgroundColor(valueNew: Color | null): void;
            /**
             * The watch callback for the progressBackgroundColor object resolver.
             */
            protected __onResolverForProgressBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
            /**
            * Returns the current value of ProgressBackgroundColor.
            * @function
            * @returns      {string}    The current value of ProgressBackgroundColor.
            */
            getProgressBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
            /**
            * Processes the current value of attribute fillerColor.
            * @function
            */
            protected __processProgressBackgroundColor(): void;
            /**
            * Sets the progress foreground color attribute.
            * @function
            * @param   {Color}    valueNew     -   The new value for progressForegroundColor.
            */
            setProgressForegroundColor(valueNew: Color | null): void;
            /**
             * The watch callback for the progressForegroundColor object resolver.
             */
            protected __onResolverForProgressForegroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
            /**
            * Returns the current value of progressForegroundColor.
            * @function
            * @returns      {string}    The current value of progressForegroundColor.
            */
            getProgressForegroundColor(): SolidColor | LinearGradientColor | null | undefined;
            /**
            * Processes the current value of attribute progressForegroundColor.
            * @function
            */
            protected __processProgressForegroundColor(): void;
            /**
            * Sets the knob color attribute.
            * @function
            * @param   {Color}    valueNew     -   The new value for KnobColor.
            */
            setKnobColor(valueNew: Color | null): void;
            /**
             * The watch callback for the knobColor object resolver.
             */
            protected __onResolverForKnobColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
            /**
            * Returns the current value of KnobColor.
            * @function
            * @returns      {string}    The current value of KnobColor.
            */
            getKnobColor(): SolidColor | LinearGradientColor | null | undefined;
            /**
            * Processes the current value of attribute KnobColor.
            * @function
            */
            protected __processKnobColor(): void;
            /**
            * Sets the knob color attribute.
            * @function
            * @param   {Color}    valueNew     -   The new value for KnobColor.
            */
            setKnobArrowsColor(valueNew: SolidColor | null): void;
            /**
             * The watch callback for the knobArrowsColor object resolver.
             */
            protected __onResolverForKnobArrowsColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
            /**
            * Returns the current value of KnobColor.
            * @function
            * @returns      {string}    The current value of KnobColor.
            */
            getKnobArrowsColor(): SolidColor | null | undefined;
            /**
            * Processes the current value of attribute KnobColor.
            * @function
            */
            protected __processKnobArrowsColor(): void;
        }
        module TcHmiLinearGauge {
            interface Range {
                color: TcHmi.SolidColor;
                start: number;
                end: number;
            }
            interface TickDefinition {
                mainTickRange: number;
                subTickRange: number;
            }
            interface KnobConfig {
                imagePath: string;
                width: number;
                height: number;
                offsetX: number;
                offsetY: number;
            }
        }
    }
}
