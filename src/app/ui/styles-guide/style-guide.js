// var csjs = require('csjs-inject')

module.exports = styleGuide

function styleGuide () {
  /* --------------------------------------------------------------------------

                              CSS PROPERTIES

  -------------------------------------------------------------------------- */
  var cssProperties = {
    /* ------------------------------------------------------
                              COLORS
    ------------------------------------------------------ */
    colors: {
      // BASIC COLORS (B&W and transparent)
      transparent: 'transparent',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      opacityBlack: 'hsla(0, 0%, 0%, .4)',

      // BLUE
      blue: 'hsla(229, 75%, 87%, 1)',
      lightBlue: 'hsla(229, 75%, 87%, .5)',
      backgroundBlue: 'hsla(229, 100%, 97%, 1)',
      blueLightTrans: 'hsla(202, 91%, 75%, .4)',
      brightBlue: 'hsla(233, 91%, 58%, 1)',
      // GREY
      grey: 'hsla(0, 0%, 40%, 1)',
      lightGrey: 'hsla(0, 0%, 40%, .5)',
      veryLightGrey: 'hsla(0, 0%, 40%, .2)',
      // RED
      strongRed: 'hsla(0, 100%, 71%, 1)',
      red: 'hsla(0, 82%, 82%, 1)',
      lightRed: 'hsla(0, 82%, 82%, .5)',
      // GREEN
      green: 'hsla(141, 75%, 84%, 1)',
      lightGreen: 'hsla(141, 75%, 84%, .5)',
      greenZing: 'hsla(148, 79%, 47%, 1)',
      // PINK
      pink: 'hsla(300, 69%, 76%, 1)',
      lightPink: 'hsla(300, 69%, 76%, .5)',
      // ORANGE
      orange: 'hsla(44, 100%, 50%, 1)',
      lightOrange: 'hsla(44, 100%, 50%, .5)',
      // VIOLET
      violet: 'hsla(240, 64%, 68%, 1)',
      lightViolet: 'hsla(240, 64%, 68%, .5)'
    },

    /* ------------------------------------------------------
                              FONTS
    ------------------------------------------------------ */
    fonts: {
      font: '14px/1.5 Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
    },

    /* ------------------------------------------------------
                                  BORDERS
    ------------------------------------------------------ */
    borders: {
      primary_borderRadius: '3px',
      secondary_borderRadius: '5px'
    }
  }

  /* --------------------------------------------------------------------------

                                APP PROPERTIES

  -------------------------------------------------------------------------- */

  var appProperties = {

    /* ------------------------------------------------------
                          ACE THEME
    ------------------------------------------------------ */

    aceTheme: '',

    /* ------------------------------------------------------
                          BACKGROUND COLORS
    ------------------------------------------------------ */
    primary_BackgroundColor: cssProperties.colors.white,
    secondary_BackgroundColor: cssProperties.colors.backgroundBlue,
    tertiary_BackgroundColor: cssProperties.colors.backgroundBlue,
    quaternary_BackgroundColor: cssProperties.colors.backgroundBlue,
    fifth_BackgroundColor: cssProperties.colors.backgroundBlue,
    seventh_BackgroundColor: cssProperties.colors.veryLightGrey,
    dark_BackgroundColor: cssProperties.colors.black,
    light_BackgroundColor: cssProperties.colors.white,
    debuggingMode_BackgroundColor: cssProperties.colors.lightViolet,
    highlight_BackgroundColor: cssProperties.colors.veryLightGrey,
    /* ------------------------------------------------------
                              RESIZING
    ******************************************************** */
    ghostBar: cssProperties.colors.blueLightTrans,
    draggingBar: cssProperties.colors.blueGreyEve,

    /* ------------------------------------------------------
                            TEXT COLORS
    ******************************************************** */
    mainText_Color: cssProperties.colors.black,
    supportText_Color: cssProperties.colors.grey,

    sub_supportText_Color: cssProperties.colors.black,
    specialText_Color: cssProperties.colors.greenZing,
    brightText_Color: cssProperties.colors.brightBlue,
    oppositeText_Color: cssProperties.colors.black,
    additionalText_Color: cssProperties.colors.veryLightGrey,

    errorText_Color: cssProperties.colors.strongRed,
    warningText_Color: cssProperties.colors.orange,
    infoText_Color: cssProperties.colors.violet,
    greyedText_color: cssProperties.colors.veryLightGrey,
    /* ------------------------------------------------------
                              ICONS
    ******************************************************** */
    icon_Color: cssProperties.colors.black,
    icon_AltColor: cssProperties.colors.white,
    icon_HoverColor: cssProperties.colors.orange,
    icon_ConstantColor: cssProperties.colors.black,

    /* ------------------------------------------------------
                            MESSAGES
    ******************************************************** */
    // Success
    success_TextColor: cssProperties.colors.black,
    success_BackgroundColor: cssProperties.colors.lightGreen,
    success_BorderColor: cssProperties.colors.green,

    // Danger
    danger_TextColor: cssProperties.colors.black,
    danger_BackgroundColor: cssProperties.colors.lightRed,
    danger_BorderColor: cssProperties.colors.red,

    // Warning
    warning_TextColor: cssProperties.colors.black,
    warning_BackgroundColor: cssProperties.colors.lightOrange,
    warning_BorderColor: cssProperties.colors.orange,

    // Tooltip
    tooltip_Color: cssProperties.colors.white,
    tooltip_BackgroundColor: cssProperties.colors.grey,
    tooltip_BorderColor: cssProperties.colors.grey,

    /* ------------------------------------------------------
                          DROPDOWN
    ******************************************************** */
    dropdown_TextColor: cssProperties.colors.black,
    dropdown_BackgroundColor: cssProperties.colors.white,
    dropdown_SecondaryBackgroundColor: cssProperties.colors.white,
    dropdown_BorderColor: cssProperties.colors.veryLightGrey,

    /* ------------------------------------------------------
                            INPUT
    ******************************************************** */
    input_TextColor: cssProperties.colors.black,
    input_BackgroundColor: cssProperties.colors.white,
    input_BorderColor: cssProperties.colors.veryLightGrey,

    /* ------------------------------------------------------
                      SOLID BORDER BOX
    ******************************************************** */
    solidBorderBox_TextColor: cssProperties.colors.black,
    solidBorderBox_BackgroundColor: cssProperties.colors.white,
    solidBorderBox_BorderColor: cssProperties.colors.veryLightGrey,

    /* ------------------------------------------------------
                      SOLID BOX
    ******************************************************** */
    solidBox_TextColor: cssProperties.colors.black,
    solidBox_BackgroundColor: cssProperties.colors.white,

    /* ------------------------------------------------------
                          BUTTONS
    ******************************************************** */

    /* .................
          PRIMARY
    .................. */
    primaryButton_TextColor: cssProperties.colors.black,
    primaryButton_BackgroundColor: cssProperties.colors.lightBlue,
    primaryButton_BorderColor: cssProperties.colors.lightBlue,

    /* .................
          SECONDARY
    .................. */
    secondaryButton_TextColor: cssProperties.colors.black,
    secondaryButton_BackgroundColor: cssProperties.colors.veryLightGrey,
    secondaryButton_BorderColor: cssProperties.colors.veryLightGrey,

    /* .................
          Teriary
    .................. */
    teriaryButton_TextColor: cssProperties.colors.black,
    teriaryButton_BackgroundColor: cssProperties.colors.lightGrey,
    teriaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Quaternary
    .................. */
    quaternaryButton_TextColor: cssProperties.colors.black,
    quaternaryButton_BackgroundColor: cssProperties.colors.white,
    quaternaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Fifth
    .................. */
    fifthButton_TextColor: cssProperties.colors.black,
    fifthButton_BackgroundColor: cssProperties.colors.blueFairyDust,
    fifthButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Sixth
    .................. */
    sixthButton_TextColor: cssProperties.colors.black,
    sixthButton_BackgroundColor: cssProperties.colors.greenZing,
    sixthButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

          SUCCESS
    .................. */
    successButton_TextColor: cssProperties.colors.white,
    successButton_BackgroundColor: cssProperties.colors.green,
    successButton_BorderColor: cssProperties.colors.green,

    /* .................
          DANGER
    .................. */
    dangerButton_TextColor: cssProperties.colors.white,
    dangerButton_BackgroundColor: cssProperties.colors.red,
    dangerButton_BorderColor: cssProperties.colors.red,

    /* .................
          WARNING
    .................. */
    warningButton_TextColor: cssProperties.colors.white,
    warningButton_BackgroundColor: cssProperties.colors.lightOrange,
    warningButton_BorderColor: cssProperties.colors.lightOrange,

    /* .................
          INFO
    .................. */
    infoButton_TextColor: cssProperties.colors.black,
    infoButton_BackgroundColor: cssProperties.colors.lightPink,
    infoButton_BorderColor: cssProperties.colors.veryLightGrey,

    /* .................
          SOLIDITY
    .................. */

    // CALL
    callButton_TextColor: cssProperties.colors.black,
    callButton_BackgroundColor: cssProperties.colors.lightBlue,
    callButton_BorderColor: cssProperties.colors.lightBlue,

    // TRANSACTION
    transactButton_TextColor: cssProperties.colors.black,
    transactButton_BackgroundColor: cssProperties.colors.lightRed,
    transactButton_BorderColor: cssProperties.colors.lightRed,

    // CONSTANT
    constantButton_TextColor: cssProperties.colors.black,
    constantButton_BackgroundColor: cssProperties.colors.lightBlue,
    constantButton_BorderColor: cssProperties.colors.lightBlue,

    // PAYABLE TRANSACTION
    transactPayableButton_TextColor: cssProperties.colors.black,
    transactPayableButton_BackgroundColor: cssProperties.colors.red,
    transactPayableButton_BorderColor: cssProperties.colors.red,

    /* ------------------------------------------------------
                            UI ELEMENTS
    ******************************************************** */

    uiElements: {
      solidBorderBox: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : 1px solid ${opts.BorderColor};
        color                 : ${opts.Color};
        border-radius         : ${cssProperties.borders.primary_borderRadius};
        font-size             : 12px;
        padding               : 10px 15px;
        line-height           : 20px;
        overflow              : hidden;
        word-break            : break-word;
        width                 : 100%;
      `,

      solidBox: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        color                 : ${opts.Color};
        font-size             : 12px;
        padding               : 10px 15px;
        line-height           : 20px;
        overflow              : hidden;
        word-break            : break-word;
        width                 : 100%;
      `,

      dottedBorderBox: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : .2em dotted ${opts.BorderColor};
        color                 : ${opts.Color};
        border-radius         : ${cssProperties.borders.secondary_borderRadius};
        line-height           : 20px;
        padding               : 8px 15px;
        margin-bottom         : 1em;
        overflow              : hidden;
        word-break            : break-word;
      `,

      inputField: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : 1px solid ${opts.BorderColor};
        color                 : ${opts.Color};
        border-radius         : ${cssProperties.borders.secondary_borderRadius};
        height                : 25px;
        width                 : 250px;
        padding               : 0 8px;
        overflow              : hidden;
        word-break            : normal;
      `,

      dropdown: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : 1px solid ${opts.BorderColor};
        color                 : ${opts.Color};
        font-size               : 12px;
        font-weight             : bold;
        padding                 : 0 8px;
        text-decoration         : none;
        cursor                  : pointer;
        border-radius           : 3px;
        height                  : 25px;
        width                   : 100%;
        text-align              : center;
        overflow                : hidden;
        word-break              : normal;
      `,

      button: (opts = {}) => `
      margin                  : 1px;
      background-color        : ${opts.BackgroundColor};
      border                  : .3px solid ${opts.BorderColor};
      color                   : ${opts.Color};
      display                 : flex;
      align-items             : center;
      justify-content         : center;
      border-radius           : 3px;
      cursor                  : pointer;
      min-height              : 25px;
      max-height              : 25px;
      width                   : 70px;
      min-width               : 70px;
      font-size               : 12px;
      overflow                : hidden;
      word-break              : normal;
      `
    }
  }

  /* --------------------------------------------------------------------------

                            REMIX PROPERTIES

  -------------------------------------------------------------------------- */

  var remixProperties = {
    /* ------------------------------------------------------
                            REMIX GENERAL
    /* ------------------------------------------------------ */
    remix: {
      modalDialog_BackgroundColor_Primary: appProperties.primary_BackgroundColor,
      modalDialog_text_Primary: appProperties.mainText_Color,
      modalDialog_text_Secondary: appProperties.supportText_Color,
      modalDialog_text_Link: appProperties.brightText_Color,
      modalDialog_text_Em: appProperties.specialText_Color,
      modalDialog_Header_Footer_BackgroundColor: appProperties.secondary_BackgroundColor,
      modalDialog_Header_Footer_Color: appProperties.mainText_Color,
      modalDialog_BoxDottedBorder_BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
      modalDialog_BoxDottedBorder_BorderColor: appProperties.solidBorderBox_BorderColor,
      modalDialog_BoxDottedBorder_Color: appProperties.solidBorderBox_TextColor,

      tooltip_CopyToClipboard_BackgroundColor: appProperties.tooltip_BackgroundColor,
      tooltip_CopyToClipboard_Color: appProperties.tooltip_Color,

      icon_Color_CopyToClipboard: appProperties.icon_Color,
      icon_HoverColor_CopyToClipboard: appProperties.icon_HoverColor,

      solidBox: appProperties.uiElements.solidBorderBox({
        BackgroundColor: appProperties.solidBox_BackgroundColor,
        Color: appProperties.solidBox_TextColor
      })
    },

    /* ------------------------------------------------------
                    LEFT PANEL (FILE PANEL)
    /* ------------------------------------------------------ */
    leftPanel: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_FileExplorer: appProperties.tertiary_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      icon_Color_Menu: appProperties.icon_Color,
      icon_HoverColor_Menu: appProperties.icon_HoverColor,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor

    },

    /* ------------------------------------------------------
                              EDITOR
    /* ------------------------------------------------------ */
    editor: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_Editor: appProperties.light_BackgroundColor,
      backgroundColor_Tabs_Highlights: appProperties.secondary_BackgroundColor,
      backgroundColor_Editor_Context_Highlights: appProperties.secondary_BackgroundColor,
      backgroundColor_Editor_Context_Error_Highlights: appProperties.error_BackgroundColor,
      backgroundColor_DebuggerMode: appProperties.debuggingMode_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,
      text_Editor: '',

      icon_Color_Editor: appProperties.icon_Color,
      icon_HoverColor_Editor: appProperties.icon_HoverColor

    },

    /* ------------------------------------------------------
                          TERMINAL
    /* ------------------------------------------------------ */
    terminal: {
      backgroundColor_Menu: appProperties.secondary_BackgroundColor,
      backgroundColor_Terminal: appProperties.seventh_BackgroundColor,
      backgroundColor_TerminalCLI: appProperties.seventh_BackgroundColor,
      backgroundImage_Terminal: "url('data:image/png;base64,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')",

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_RegularLog: appProperties.mainText_Color,
      text_InfoLog: appProperties.supportText_Color,
      text_ErrorLog: appProperties.errorText_Color,
      text_WarnLog: appProperties.warningText_Color,
      text_Title_TransactionLog: appProperties.infoText_Color,
      text_Regular_TransactionLog: appProperties.supportText_Color,
      text_Button: appProperties.oppositeText_Color,

      icon_Color_Log_Succeed: appProperties.success_BorderColor,
      icon_Color_Log_Failed: appProperties.errorText_Color,
      icon_BackgroundColor_Log_Call: appProperties.infoText_Color,
      icon_Color_Log_Call: appProperties.icon_AltColor,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor,
      icon_Color_Menu: appProperties.icon_Color,
      icon_HoverColor_Menu: appProperties.icon_HoverColor,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      input_Search_MenuBar: appProperties.uiElements.inputField({
        BackgroundColor: appProperties.input_BackgroundColor,
        BorderColor: appProperties.input_BorderColor,
        Color: appProperties.input_TextColor
      }),

      dropdown_Filter_MenuBar: appProperties.uiElements.dropdown({
        BackgroundColor: appProperties.dropdown_BackgroundColor,
        BorderColor: appProperties.dropdown_BorderColor,
        Color: appProperties.dropdown_TextColor
      }),

      button_Log_Debug: appProperties.uiElements.button({
        BackgroundColor: appProperties.quaternaryButton_BackgroundColor,
        BorderColor: appProperties.infoButton_BorderColor,
        Color: appProperties.infoButton_TextColor
      }),

      button_Log_Details: appProperties.uiElements.button({
        BackgroundColor: appProperties.quaternaryButton_BackgroundColor,
        BorderColor: appProperties.quaternaryButton_BorderColor,
        Color: appProperties.quaternaryButton_TextColor
      })

    },

    /* ------------------------------------------------------
                              RIGHT PANEL
    /* ------------------------------------------------------ */
    rightPanel: {
      backgroundColor_Panel: appProperties.fifth_BackgroundColor,
      backgroundColor_Tab: appProperties.fifth_BackgroundColor,
      BackgroundColor_Pre: appProperties.primary_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,
      text_link: appProperties.brightText_Color,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor,

      message_Warning_BackgroundColor: appProperties.warning_BackgroundColor,
      message_Warning_BorderColor: appProperties.warning_BorderColor,
      message_Warning_Color: appProperties.warning_TextColor,

      message_Error_BackgroundColor: appProperties.danger_BackgroundColor,
      message_Error_BorderColor: appProperties.danger_BorderColor,
      message_Error_Color: appProperties.danger_TextColor,

      message_Success_BackgroundColor: appProperties.success_BackgroundColor,
      message_Success_BorderColor: appProperties.success_BorderColor,
      message_Success_Color: appProperties.success_TextColor,

      /* ::::::::::::::
          COMPILE TAB
      ::::::::::::::: */
      compileTab: {
        button_Compile: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        button_Details: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        button_Publish: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        dropdown_CompileContract: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        box_CompileContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.quaternary_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        icon_WarnCompilation_Color: appProperties.warning_BackgroundColor

      },

      /* ::::::::::::::
          RUN TAB
      ::::::::::::::: */
      runTab: {

        additionalText_Color: appProperties.additionalText_Color,

        box_RunTab: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
        }),

        box_Info_RunTab: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        dropdown_RunTab: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),
        titlebox_RunTab: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_SecondaryBackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        input_RunTab: appProperties.uiElements.inputField({
          BackgroundColor: appProperties.input_BackgroundColor,
          BorderColor: appProperties.input_BorderColor,
          Color: appProperties.input_TextColor
        }),

        box_Instance: appProperties.uiElements.solidBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
        }),

        borderBox_Instance: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor,
          BorderColor: appProperties.solidBorderBox_BorderColor
        }),

        button_atAddress: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),
        button_Create: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.transactButton_TextColor
        }),
        button_Constant: appProperties.uiElements.button({
          BackgroundColor: appProperties.constantButton_BackgroundColor,
          BorderColor: appProperties.constantButton_BorderColor,
          Color: appProperties.constantButton_TextColor
        }),
        button_Instance_Call: appProperties.uiElements.button({
          BackgroundColor: appProperties.callButton_BackgroundColor,
          BorderColor: appProperties.callButton_BorderColor,
          Color: appProperties.callButton_TextColor
        }),
        button_Instance_Transact: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.transactButton_TextColor
        }),

        button_Instance_TransactPayable: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactPayableButton_BackgroundColor,
          BorderColor: appProperties.transactPayableButton_BorderColor,
          Color: appProperties.transactPayableButton_TextColor
        }),

        icon_Color_Instance_CopyToClipboard: appProperties.icon_Color,
        icon_AltColor_Instance_CopyToClipboard: appProperties.icon_AltColor,
        icon_HoverColor_Instance_CopyToClipboard: appProperties.icon_HoverColor,

        icon_Color: appProperties.icon_Color,
        icon_HoverColor: appProperties.icon_HoverColor

      },

      /* ::::::::::::::
         TEST TAB
      ::::::::::::::: */
      testTab: {
        box_listTests: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        button_runTests: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        button_generateTestFile: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        color_testPass: appProperties.success_BackgroundColor,
        color_testFail: appProperties.danger_BackgroundColor
      },

      /* ::::::::::::::
         SETTINGS TAB
      ::::::::::::::: */
      settingsTab: {
        box_SolidityVersionInfo: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        dropdown_SelectCompiler: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        button_LoadPlugin: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),
        button_initPlugin: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        })
      },

      /* ::::::::::::::
        DEBUGGER TAB
      ::::::::::::::: */
      debuggerTab: {
        text_Primary: appProperties.mainText_Color,
        text_Secondary: appProperties.supportText_Color,
        text_BgHighlight: appProperties.highlight_BackgroundColor,

        box_Debugger: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        button_Debugger: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        button_Debugger_icon_Color: appProperties.icon_ConstantColor,
        button_Debugger_icon_HoverColor: appProperties.icon_HoverColor,

        dropdown_Debugger: appProperties.uiElements.dropdown({
          BackgroundColor: cssProperties.colors.veryLightGrey,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        input_Debugger: appProperties.uiElements.inputField({
          BackgroundColor: appProperties.input_BackgroundColor,
          BorderColor: appProperties.input_BorderColor,
          Color: appProperties.input_TextColor
        }),

        debuggerDropdowns_Instructions_Highlight_BackgroundColor: appProperties.secondary_BackgroundColor

      },

      /* ::::::::::::::
        ANALYSIS TAB
      ::::::::::::::: */
      analysisTab: {
        button_Run_AnalysisTab: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        box_AnalysisContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        })
      },

      /* ::::::::::::::
        SUPPORT TAB
      ::::::::::::::: */
      supportTab: {
        box_IframeContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        box_SupportInfo: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        })

      }

    }
  }

  return {
    colors: cssProperties.colors,
    appProperties: appProperties,
    borders: cssProperties.borders,
    leftPanel: remixProperties.leftPanel,
    editor: remixProperties.editor,
    terminal: remixProperties.terminal,
    rightPanel: remixProperties.rightPanel,
    remix: remixProperties.remix
  }
}
