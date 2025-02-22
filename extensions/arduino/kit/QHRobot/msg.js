/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
    	QH_BUTTON_LABEL:'---BUTTON---',
    	QH_SENSOR_LABEL:'---SENSOR---',
    	QH_COLOR_LABEL:'---COLOR---',
    	QH_MPU6050_LABEL:'---GYRO---',
    	QH_RELAY_LABEL:'---RELAY---',
    	QH_BUZZER_LABEL:'---BUZZER---',
    	QH_SERVO_LABEL:'---SERVO---',
    	QH_DCMOTO_LABEL:'---DCMOTOR---',
    	QH_SYNTHESIS_LABEL:'---SYNTHESIS---',
    	QH_RECOGNITION_LABEL:'---RECOGNITION---',
    	QH_IR_LABEL:'---IR---',
    	QH_BLUETOOTH_LABEL:'---BLUETOOTH---',
    	QH_SERIAL_LABEL:'---SERIAL---',
    	QH_ANNOTATION_LABEL:'---ANNOTATION---',
    	QH_VARIABLE_LABEL:'---VARIABLE---',
    	QH_SCOOP_LABEL:'---Scoop---',
    	QH_OPERATOR_LABEL:'---OPERATOR---',
    	QH_SENSOR_CATEGORY:'Sensor',
    	QH_ACTUATOR_CATEGORY:'Actuator',
    	QH_SPEECH_CATEGORY:'Speech',
    	QH_COMMUNICATE_CATEGORY:'Communicate',
    	QH_MP3_CATEGORY:'MP3',
    	QH_SMG_CATEGORY:'Display',
    	QH_OLED_CATEGORY:'OLED',
    	QH_SDISPLAY_CATEGORY:'SDisplay',
    	QH_LCD_CATEGORY:'LCD',
    	QH_HDISPLAY_CATEGORY:'HDisplay',
    	QH_OTHER_CATEGORY:'Other',
    	QH_LEFT:'Left',
    	QH_RIGHT:'Right',
        QH_BUTTON_GENERAL:'Button pin %1  L/R %2',
        QH_BUTTON_BOTH:'L OR R button PIN %1',
        QH_BUTTONFUCTION_INIT:'Enable the multi-functionbutton port %1',
        QH_BUTTONFUCTION_DO:'Multi-function button Port %1 L/R %2 Trigger mode %3',
        QH_BUTTONSingleClick:"SingleClick",
		QH_BUTTONDoubleClick:"DoubleClick",
		QH_BUTTONTripleClick:"TripleClick",
		QH_BUTTONSingleLongClick:"SingleLongClick",
		QH_BUTTONDoubleLongClick:"DoubleLongClick",
		QH_BUTTONTripleLongClick:"TripleLongClick",
		QH_UltraSonicDistanceSensor:'Utrasonic ranging Port %1 unit %2',
		qdp_chaoshengboI2C:'QH Utrasonic ranging(IIC)',
		qdp_chaoshengboSerial:'QH Utrasonic ranging %1 Port %2',
		QH_LINE_FOLLOWER:'Line follower Port %1 Left %2 Right %3',
		QH_LIGHTSENSOR:'Light sensor Port %1',
		QH_SOUND:'Sound sensor Port %1',
		QH_POTENTIOMETER:'Potentiometer sensor Port %1 L/R %2',
		QH_JOYSTICK_INITIALIZATION:'Joystick initialization Port %1',
		QH_GET_THE_JOYSTICK_VALUE:'Get the joystick parameter %1',
		QH_ANGLE:'Angle',
		QH_VALUE:'Value',
		QH_Soilmoisture:'Soilmoisture sensor Port %1',
		QH_dht11:'Temperature and humidity sensor Port %1 parameter %2',
		QH_Temperature:'Temperature',
		QH_Humidity:'Humidity',
		QH_yssb_init:'Enable color recognition Time delay %1 MS Photosensitive gain %2  value  %3 I2C Address %4',
		QH_noPrint:'No Print',
		QH_Print:'Print',
		QH_yssb_get:'Get the color value %1',
		QH_yssb_compare:'Color if %1 = %2 offset ± %3',
		QH_MPU6050_update:'MPU6050 (IIC) updata',
		QH_MPU6050_yaw_reset:'YAW reset',
		QH_MPU6050_GETDATA:'Read the value of the gyroscope %1',
		QH_Accel_X:"X Axis Accel", 
        QH_Accel_Y:"Y Axis Accel", 
        QH_Accel_Z:"Z Axis Accel",
        QH_Gyro_X:"X Gyro Accel",
        QH_Gyro_Y:"Y Gyro Accel",
        QH_Gyro_Z:"Z Gyro Accel",
        QH_readTempC:"Temperature",
        QH_MPU6050_readYaw:"Yaw",
        QH_gyro_pitch:"pitch",
        QH_gyro_roll:"roll",
        QH_MPU6050_MOTION_update:'MPU6050 (IIC) motion updata',
        QH_MPU6050_MOTION_GETDATA:'Read the value of the gyroscope %1',
        QH_gyro_isActivity: "Is activity", 
        QH_gyro_isInactivity: "Is inactivity", 
        QH_gyro_isPosActivityOnX: "is Pos activity on X",
        QH_gyro_isNegActivityOnX: "is Neg activity on X",
        QH_gyro_isPosActivityOnY: "is Pos activity on Y",
        QH_gyro_isNegActivityOnY: "is Neg activity on Y",
        QH_gyro_isPosActivityOnZ: "is Pos activity on Z",
        QH_gyro_isNegActivityOnZ:"is Neg activity on Z",
        QH_ledlight:'LED light Port %1 L/R %2 state %3',
        QH_read_ledlight:'Read LED light Port %1 L/R %2 ',
        QH_ledlight_PWM:'LED Port %1 L/R %2 Value %3',
        QH_relay:'Relay Port %1 L/R %2 state %3',
        QH_read_relay:'Read relay Port %1 L/R %2 ',
        QH_rgb_led:'RGB LED Port %1 total %2  NO %3 R %4 G %5 B %6',
        QH_rgb_led2:'RGB LED Port %1 total %2  NO %3 color %4',
        QH_buzzer:'Buzzer Port %1  frequency %2 duration %3',
        QH_buzzer_music:'Buzzer Port %1 play music %2 ',
        QH_motor:'DC motor Port %1 speed(-255~255) %2',
        QH_code_motor:'Code motor Port %1 Interrupt? %2 Pulse count %3 Speed（-255~255）%4 Deceleration pulse %5 Deceleration speed %6',
        QH_code_motor_read:'Code motor state Port %1 State %2',
        QH_servomotorstate1:'Runing = 1',
		QH_servomotorstate2:'Finished = 0',
        QH_servomotor360:'Servo 360° Port %1 Direction %2 Speed(0~10) %3',
        QH_CW:'CW',
		QH_CCW:'CCW',
		QH_servomotor180:'Servo 180° Port %1 Speed %2 Angle(0~180) %3 Interrupt %4',
		QH_Donotinterrupt:'Do not interrupt',
		QH_Interruptible:'Interruptible',
		QH_servomotorread:'Servo read angle Port %1',
		QH_servomotorPWM_set180:'Servo board N0 %1 [parameter setting] Lower limit range of PWM(1-4095) %2 PWM upper limit range (2-4096) %3',
		QH_servomotorPWM:'Servo board N0 %1 Servo NO(0~15) %2 Angle %3 ',
		QH_servomotorPWM_set360:'Servo board360° NO %1 [parameter setting] PWM stop value %2 PWM forward lower limit %3 PWM forward upper limit  %4 PWM reverses lower limit %5 PWM reverses upper limit %6 ',
		QH_servomotorPWM360:'Servo board360° N0 %1 Direction %2 NO(0`15)  %3 Speed(0`10) %4',
		QH_Voice:'Voice module Port %1 Play %2 delay %3 ',
		QH_VoicePlayValue:"Voice module Port %1 Play value %2",
		QH_ASR_SendData:'Send to QH-ASR Port %1 Order %2',
		QH_ASR_ReceiveData:'QH-ASR start Port %1',
		QH_ASR_CompareData:'QH-ASR CompareData Port %1 Order %2',
		QH_QF_hc:'Text to speech Port %1 Pronunciation people %2 interrupt %3 volume(0-11) %4 speed(0-11) %5 intonnation(0-11) %6 Details %7',
		QH_QF_sound:'Play prompt tone Port %1 Type %2 Number(01~25) %3',
		QH_QF_stophc:'Stop speech Port %1 ',
		QH_QF_startstopsb:'Start voice recognition Port %1 Play result %2 ',
		QH_Sayresult:'Say result',
		QH_NoSayresult:'No Say result',
		QH_QF_sbjg:'Identify results Port %1 Recognized %2',
		QH_ir_re2:'Remote control input RC5 Port %1 Keybord %2 Mode %3',
		QH_IrPress:'Press',
		QH_IrPressOn:'Press on',
		QH_ir_send_nec:'Infrared emission %1 Port P2(L3) data %2 bits %3',
		QH_ir_send_raw:'Infrared emission Port P2(L3) %1 Array %2 Array length %3 frequency %4',
		QH_BT_START:'Bluetooth start P5(R0-L1)',
		QH_BT_button:'Bluetooth key P5(R0L1) %1',
		QH_BT_variable:'Bluetooth variable P5(R0L1) %1',
		QH_BT_print:'Bluetooth send variable P5(R0L1) variable 1 %1 variable 2 %2 variable 3 %3 variable 4 %4 variable 5 %5',
		QH_serial_change:'Define to serial Port %1',
        QH_serial_jieshouzhi:'Serial received Port %1 if data= %2',
        QH_serial_fasong:'Serial send Port %1 Mode %2 Detai1 %3',
        QH_SERIAL_WRITE:'WRITE',
		QH_SERIAL_PRINT:'PRINT',
		QH_SERIAL_PRINTLN:'PRINTLN',
		QH_serial_jieshou:'Serial received Port %1 return string',
		QH_serial_suju:'Serial available Port %1',
		QH_MP3_bofangx:'Play the specified Port %1 volume(0-30) %2 Designated track number %3',
		QH_MP3_yingliang:'Volume adjustment Port %1 volume(0-30) %2',
		QH_MP3_loopplay:'Loop play Port %1 Volume(0-30) %2 Designated track number %3',
		QH_MP3_startpause:'Play/Pause Port %1 Mode %2',
		QH_START:'PLAY',
		QH_PAUSE:'PAUSE',
		QH_MP3_previous_next:'Previous/Next Port %1 Mode %2',
		QH_PREVIOUS:'PREVIOUS',
		QH_NEXT:'NEXT',
		QH_MP3_play:'Play sound sound %1 Port %2 Volume(0-30) %3',
		QH_play1:'1laughter',
		QH_play2:'2cry',
		QH_play3:'3tank ',
		QH_play4:'4strafe',
		QH_play5:'5shot',
		QH_play6:'6transformers',
		QH_play7:'7speed up',
		QH_play8:'8braking',
		QH_play9:'9flight',
		QH_play10:'10copter',
		QH_play11:'11cat',
		QH_play12:'12dog',
		QH_play13:'13tiger',
		QH_play14:'14chicken',
		QH_ESPuno_define_mp3_directory:'Define the MP3 SD card file directory %1 ',
		QH_ESPuno_mp3_designated_play:'Mode %1 Port %2 Volume(0-30) %3 Designated track number %4',
		QH_BOFANGX:'Play specified',
		QH_LOOPPLAY:'Loop play',
		QH_display:'Digit Port %1 decimal digits %2 number %3',
		QH_displayoff:'Turn off Digit Port %1',
		QH_display_samll_refresh_display:'Small display refresh %1',
		QH_display_samll_HV:'Screen direction Port %1 direction %2',
		QH_display_samll_HV1:'transverse 0',
		QH_display_samll_HV0:'vertical 90',
		QH_display_samll_HV2:'transverse 180',
		QH_display_samll_HV3:'vertical 270',
		QH_display_samll_BL:'Screen brightness Port %1 Value(0-255) %2',
		QH_display_samll_clr:'Color Port %1 Mode %2 Color(0-63) %3',
		QH_display_samll_clr1:'refresh',
		QH_display_samll_clr2:'background',
		QH_display_samll_flash_pic:'Picture show Port %1 H/V %2 Mode %3 Picture %4',
		QH_display_samll_HV10:'transverse',
		QH_display_samll_HV11:'vertical',
		QH_display_samll_pic0:'normal',
		QH_display_samll_pic1:'transparent',
		QH_display_samll_pic:'Picture show %1 Mode %2 addr %3 Start X %4 Y %5 Wide High W %6 H %7',
		QH_display_samll_PS:'Draw point Port %1 X %2 Y %3 Color(0-63) %4',
		QH_display_samll_PL:'Draw line box Port %1 Mode %2 start point X %3 Y %4 End point X %5 Y %6 Color(0-63) %7',
		QH_display_samll_pl1:'Line drawing',
		QH_display_samll_pl2:'The hollow box',
		QH_display_samll_pl3:'The solid frame',
		QH_display_samll_CIR:'Draw circle Port %1 Type %2 Center X %3 Y %4 Radius R %5 Color(0-63) %6',
		QH_displaysolidround:'Solid round',
		QH_displayhollowround:'The hollow circle',
		QH_display_samll_DC:'TEXT Port %1 Font size %2 Color(0-63) %3 Start point X %4 Y %5 Content %6',
		QH_display_samll_CN:'TEXT Port %1 Font size %2 Color(0-63) %3 Start point X %4 Y %5 Content %6',
		QH_display_samll_SBCDC:'Background TEXT Port %1 Font size %2 base color(0-63) %3 Color(0-63) %4 Start point X %5 Y %6 Content %7',
		QH_display_samll_order:'Custom instruction Port %1 Content %2 ',
		QH_display_samll_btl:'Baud rate Port %1 BPS %2',
		group_lcd_init2:'Initialization LCD %1 Name %2 Device address %3 SCL %4 SDA %5',
		group_lcd_print:'LCD %1 Print Line 1 %2 Print Line 2 %3',
		group_lcd_print2:'LCD %1 Row %2 column %3 Print %4',
		group_lcd_power:'LCD %1 Mode %2',
		QH_ON:'ON',
		QH_OFF:'OFF',
		QH_LCD_STAT_CURSOR:'CURSOR',
		QH_LCD_STAT_NOCURSOR:'NO CURSOR',
		QH_LCD_STAT_BLINK:'BLINK',
		QH_LCD_STAT_NOBLINK:'NO BLINK',
		QH_LCD_STAT_CLEAR:'CLEAR',
		QH_LCD_NOBACKLIGHT:'NO BACKLIGHT',
		QH_LCD_BACKLIGHT:'BACKLIGHT',
		qdp_display_START:' %1 Display start P5(R0-L1)',
		qdp_display_button:'Display key P5(R0-L1)= %1',
		qdp_display_variable:'Display variable P5(R0-L1) %1',
		qdp_display_print:'Send variable to display P5(R0-L1)V %1 Value %2',
		qdp_zkpdisplay_sleep:'Screen Sleep Port P5 %1',
		QH_displaysleep1:'Sleep',
		QH_displaysleep0:'Wakeup',qdp_zkpdisplay_buzzer:'Screen buzzer Port P5 frequency %1 Volume(0-100) %2',
		qdp_zkpdisplay_clscolor:'Brush color screen Port P5 Color %1',
		qdp_zkpdisplay_color:'Color %1',
		qdp_zkpdisplay_pic:'Face brush Port P5 %1',
		QH_displaypic1:'love',
		QH_displaypic2:'surprised',
		QH_displaypic3:'sad',
		QH_displaypic4:'Over your face',
		QH_displaypic5:'Smiling face',
		QH_displaypic6:'dizzy',
		QH_displaypic7:'Blink of an eye',
		QH_displaypic8:'praise',
		QH_displaypic9:'Learn the qr code',
		qdp_zkpdisplay_page:'Page jump Port P5 %1',
		QH_displaypage1:'Menu',
		QH_displaypage2:'Remote control/slider',
		QH_displaypage3:'Remote control/variable',
		QH_displaypage4:'Slider',
		QH_displaypage5:'Variable',
		QH_displaypage6:'Keys',
		QH_displaypage7:'Serial',
		QH_displaypage8:'The random number',
		QH_displaypage9:'blank pages',
		qdp_zkpdisplay_drawinground:'Circle Port P5 Type %1 X %2 Y %3 R %4 Decimal color %5',
		QH_displaysolidround:'Solid round',
		QH_displayhollowround:'The hollow circle',
		qdp_zkpdisplay_function1:'Draw Port P5 Type %1 X %2 Y %3 X2W %4 Y2H %5 Decimal color %6',
		QH_displayfunction1fill:'Area filling',
		QH_displayfunction1line:'Line drawing',
		QH_displayfunction1draw:'Draw a rectangular',
		qdp_zkpdisplay_TEXT:'TEXT message Port P5 fill %1 X %2 Y %3 W %4 H %5 Text color %6 Background color %7 Content %8',
		QH_displaybackcolor0:'Cut the figure',
		QH_displaybackcolor1:'monochromatic',
		QH_displaybackcolor2:'picture',
		QH_displaybackcolor3:'No background',
		qdp_zkpdisplay_TEXT_CN:'TEXT message Port P5 fill %1 X %2 Y %3 W %4 H %5 Text color %6 Background color %7 Content %8',
		qdp_zkpdisplay_order:'Custom instruction Port P5 %1',
		QH_DISPLAY_MATRIX_ROTATE:'ROTATE ',
		QH_MIRROR:'MIRROR',
		oled_init:'Initialization OLED %1 Name %2 Rotation angle %3 SCL %4 SDA %5 Device address %6',
		oled_page:'%1 OLED %2 Refresh the page',
		oled_showBitmap:'OLED %1 Display image Start point X %2 Y %3 Width %4 Height %5 Image name %6',
		tool_modulus:'Bitmap format %1 Mode %2 Direction %3 Font %4 Size %5 px Width %6 px Height %7 px Content %8',
		tool_modulus_show:'Image name %1 [%2] save to flash %3 %4',
		oled_clear:'OLED %1 Clear screen ',
		u8g2_setContrast:'OLED %1 Backlight brightness %2',
		oled_face:'OLED %1 Display image Start point X %2 Y %3 Built-in ICONS %4',
		oled_drawPixel:'OLED %1 Draw point Start point X %2 Y %3 ',
		oled_drawLine:'OLED %1 Draw line Start point X %2 Y %3 End point X %4 Y %5',
		oled_draw_Str_Line:'OLED %1 Draw straight line Start point X %2 Y %3 Length X %4 Mode %5',
		QH_OLED_HOR:'Horizontal',
		QH_OLED_VER:'Vertical',
		oled_drawFrame:'OLED %1 Draw rect Mode %2 Start poin X %3 Y %4 Width  %5 Height %6',
		oled_drawRFrame:'OLED %1 Draw rect Mode %2 Start poin X %3 Y %4 Width  %5 Height %6 Radius %7',
		oled_drawCircle:'OLED %1 Circle Mode %2 Center X %3 Y %4 Radius %5 Type %6',
		QH_OLED_WHOLE_CICILE:'Full circle',
		QH_OLED_UP_R:'Upper right',
		QH_OLED_UP_L:'Upper left',
		QH_OLED_LOW_R:'Down right',
		QH_OLED_LOW_L:'Down left',
		oled_drawEllipse:'OLED %1 Draw Ellipse Mode %2 Center X %3 Y %4 Radius X %5 Y %6 Type %7',
		QH_OLED_HOLLOW:'Hollow',
		QH_OLED_SOLID:'Solid',
		oled_drawTriangle:'OLED %1 Draw Triangle A point X %2 Y %3 B point X %4 Y %5 C point X %6 Y %7',
		QH_variables_declare:'Declare %1 variable Type %2 Name %3 Assigned to %4',
		QH_variables_set:'Set %1 variable by %2',
		QH_variables_change:'Change %1 variable mode %2',
		QH_global:'Global',
		QH_local:'Local',
		QH_MATH_INT: 'int',
		QH_MATH_LONG: 'long',
		QH_MATH_FLOAT: 'float',
		QH_MATH_BOOLEAN: 'boolean',
		QH_MATH_BYTE: 'byte',
		QH_MATH_CHAR: 'char',
		QH_MATH_STRING: 'string',
		QH_MATH_UNSIGNED_INT: 'unsigned int',
		QH_MATH_WORD: 'word',
		QH_MATH_UNSIGNED_LONG: 'unsigned long',
		QH_MATH_UNSIGNED_CHAR: 'unsigned char',
		QH_MATH_DOUBLE: 'double',
		COOPERATIVESCHEDULER_CATEGORY: 'Cooperative scheduler',
        COOPERATIVESCHEDULER_START: 'start cooperative scheduler',
        COOPERATIVESCHEDULER_SETUP: 'cooperative scheduler %1 setup',
        COOPERATIVESCHEDULER_SLEEP: 'cooperative scheduler delay %1 ms',
        QH_EQU:'EQU(==)',
		QH_NEQ:'(NEQ!=)',
		QH_GTR:'GTR(>)',
		QH_LSS:'LSS(<)',
		QH_GEQ:'GEQ(>=)',
		QH_LEQ:'LEQ(<=)',
		QH_bit_operator:'Bit operator %1 %2 %3',
		QH_AND:'And(&))',
		QH_OR:'Or(|)',
		QH_XOR:'Xor(^)',
		QH_SHIFT_R:'SHIFT_R(>>)',
		QH_SHIFT_L:'SHIFT_L(<<)',
		QH_constrain:'Constrain %1 Min %2 Max %3 ',
		QH_map:'Map %1 From[ %2 , %3 ] To [ %4 , %5 ]'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
    	QH_BUTTON_LABEL:'---按钮---',
    	QH_SENSOR_LABEL:'---传感器---',
    	QH_COLOR_LABEL:'---颜色---',
    	QH_MPU6050_LABEL:'---陀螺仪---',
    	QH_LED_LABEL:'---陀螺仪---',
    	QH_RELAY_LABEL:'---继电器---',
    	QH_BUZZER_LABEL:'---蜂鸣器---',
    	QH_SERVO_LABEL:'---舵机---',
    	QH_DCMOTO_LABEL:'---直流电机---',
    	QH_SYNTHESIS_LABEL:'---语音合成---',
    	QH_RECOGNITION_LABEL:'---语音识别---',
    	QH_IR_LABEL:'---红外---',
    	QH_BLUETOOTH_LABEL:'---蓝牙---',
    	QH_SERIAL_LABEL:'---串口---',
    	QH_ANNOTATION_LABEL:'---注释---',
    	QH_VARIABLE_LABEL:'---变量---',
    	QH_SCOOP_LABEL:'---多任务---',
    	QH_OPERATOR_LABEL:'---运算---',
    	QH_SENSOR_CATEGORY:'传感器',
    	QH_ACTUATOR_CATEGORY:'执行器',
    	QH_SPEECH_CATEGORY:'语音',
    	QH_COMMUNICATE_CATEGORY:'通讯',
    	QH_MP3_CATEGORY:'MP3',
    	QH_SMG_CATEGORY:'数码管',
    	QH_OLED_CATEGORY:'OLED',
    	QH_SDISPLAY_CATEGORY:'小彩屏',
    	QH_LCD_CATEGORY:'LCD',
    	QH_HDISPLAY_CATEGORY:'掌控屏',
    	QH_OTHER_CATEGORY:'其它',
    	QH_LEFT:'左',
    	QH_RIGHT:'右',
        QH_BUTTON_GENERAL:'按钮 引脚 %1  左/右 %2',
        QH_BUTTON_BOTH:'左或右按钮 引脚 %1',
        QH_BUTTONFUCTION_INIT:'启用多功能按钮 引脚 %1',
        QH_BUTTONFUCTION_DO:'多功能按钮 引脚 %1 左右 %2 触发方式 %3',
        QH_BUTTONSingleClick:"单击",
		QH_BUTTONDoubleClick:"双击",
		QH_BUTTONTripleClick:"三击",
		QH_BUTTONSingleLongClick:"长按",
		QH_BUTTONDoubleLongClick:"单击后长按",
		QH_BUTTONTripleLongClick:"双击后长按",
		QH_UltraSonicDistanceSensor:'超声波测距 端口 %1 单位 %2',
		qdp_chaoshengboI2C:'QH 超声波测距(IIC)',
		qdp_chaoshengboSerial:'QH 超声波测距 %1 端口 %2',
		QH_LINE_FOLLOWER:'巡线 端口 %1 左路 %2 右路 %3',
		QH_LIGHTSENSOR:'光线传感器 端口 %1',
		QH_SOUND:'声音传感器 端口 %1',
		QH_POTENTIOMETER:'电位传感器 端口 %1 左右 %2',
		QH_JOYSTICK_INITIALIZATION:'遥杆初始化 端口 %1',
		QH_GET_THE_JOYSTICK_VALUE:'获取摇杆参数 %1',
		QH_ANGLE:'角度',
		QH_VALUE:'值',
		QH_Soilmoisture:'土壤湿度传感器 端口 %1',
		QH_dht11:'温湿度传感器 端口 %1 参数 %2',
		QH_Temperature:'温度',
		QH_Humidity:'湿度',
		QH_yssb_init:'初始化颜色识别 延时 %1 MS 光敏增益 %2 倍 值 %3 I2C地址 %4',
		QH_noPrint:'不打印',
		QH_Print:'打印',
		QH_yssb_get:'获取颜色值 %1',
		QH_yssb_compare:'颜色 如果 %1 = %2 偏差 ± %3',
		QH_MPU6050_update:'启用陀螺仪(IIC)刷新数据',
		QH_MPU6050_yaw_reset:'偏航检测复位',
		QH_MPU6050_GETDATA:'读取陀螺仪的值 %1',
		QH_Accel_X:"X轴加速度", 
        QH_Accel_Y:"Y轴加速度", 
        QH_Accel_Z:"Z轴加速度",
        QH_Gyro_X:"X轴角度",
        QH_Gyro_Y:"Y轴角度",
        QH_Gyro_Z:"Z轴角度",
        QH_readTempC:"温度",
        QH_MPU6050_readYaw:"偏航角",
        QH_gyro_pitch:"俯仰角",
        QH_gyro_roll:"滚转角",
        QH_MPU6050_MOTION_update:'启用陀螺仪(IIC)动作检测刷新数据',
        QH_MPU6050_MOTION_GETDATA:'读取陀螺仪的值 %1',
		QH_gyro_isActivity: "活动", 
		QH_gyro_isInactivity: "静止", 
		QH_gyro_isPosActivityOnX: "X位置活动",
		QH_gyro_isNegActivityOnX: "X角度活动",
		QH_gyro_isPosActivityOnY: "Y位置活动",
		QH_gyro_isNegActivityOnY: "Y角度活动",
		QH_gyro_isPosActivityOnZ: "Z位置活动",
		QH_gyro_isNegActivityOnZ:"Z角度活动",
		QH_ledlight:'LED 引脚 %1 左/右 %2 状态 %3',
		QH_read_ledlight:'读取 LED 引脚 %1 左/右 %2 ',
		QH_ledlight_PWM:'LED 引脚 %1 左/右 %2 值(0~255) %3',
		QH_relay:'继电器 引脚 %1 左/右 %2 状态 %3',
		QH_read_relay:'读取 继电器 引脚 %1 左/右 %2 ',
		QH_rgb_led:'RGB LED 端口 %1 总数 %2  灯号 %3 R %4 G %5 B %6',
		QH_rgb_led2:'RGB LED 端口 %1 总数 %2  灯号 %3 颜色 %4',
		QH_buzzer:'蜂鸣器 端口 %1 频率 %2 持续时间 %3',
		QH_buzzer_music:'蜂鸣器 端口 %1 演奏音乐 %2 ',
		QH_motor:'直流电机 端口 %1 速度(-255~255) %2',
		QH_code_motor:'编码电机 端口 %1 可中断？ %2 脉冲数 %3 速度（-255~255）%4 减速脉冲数 %5 减速速度 %6',
		QH_code_motor_read:'编码电机状态 端口 %1 状态 %2',
		QH_servomotorstate1:'运行中 = 1',
		QH_servomotorstate2:'完成 = 0',
		QH_servomotor360:'舵机360° 端口 %1 方向 %2 速度(0~10) %3',
		QH_CW:'正转',
		QH_CCW:'反转',
		QH_servomotor180:'舵机180° 端口 %1 速度 %2 角度(0~180) %3 是否可中断 %4',
		QH_Donotinterrupt:'不中断',
		QH_Interruptible:'中断',
		QH_servomotorread:'舵机读取角度 端口 %1',
		QH_servomotorPWM_set180:'舵机板180° 板号 %1 [参数设置] PWM下限值 范围(1-4095) %2 PWM 上限值 范围(2-4096) %3',
		QH_servomotorPWM:'舵机板180° 板号 %1 舵机号(0~15) %2 角度 %3 ',
		QH_servomotorPWM_set360:'舵机板360° 板号 %1 [参数设置] PWM停止值 %2 PWM 正转下限值  %3 PWM 正转上限值  %4 PWM 反转下限值  %5 PWM 反转上限值  %6 ',
		QH_servomotorPWM360:'舵机板360° 板号 %1 方向 %2 舵机号(0`15)  %3 速度(0`10) %4',
		QH_Voice:'语音模块 端口 %1 播放 %2 延时 %3 ',
		QH_VoicePlayValue:'语音模块 端口 %1 播放数字值 %2',
		QH_ASR_SendData:'发送到齐护语音识别 端口 %1 指令 %2',
		QH_ASR_ReceiveData:'齐护语音识别 开启 端口 %1',
		QH_ASR_CompareData:'齐护语音识别到 端口 %1 指令 %2',
		QH_QF_hc:'语音合成 端口 %1 发音人 %2 中断 %3 音量(0-11) %4 语速(0-11) %5 语调(0-11) %6 内容 %7',
		QH_QF_sound:'播放提示音 端口 %1 类型 %2 编号(01~25) %3',
		QH_QF_stophc:'停止合成 端口 %1 ',
		QH_QF_startstopsb:'开启语音识别 端口 %1 播报识别 %2 ',
		QH_Sayresult:'播报识别结果',
		QH_NoSayresult:'不播报识别结果',
		QH_QF_sbjg:'识别结果 端口 %1 识别到 %2',
		QH_ir_re2:'红外遥控 RC5 端口 %1 按键 %2 模式 %3',
		QH_IrPress:'按下',
		QH_IrPressOn:'按住',
		QH_ir_send_nec:'红外发射 模式 %1 端口 P2(L3) 数值 %2 比特数 %3',
		QH_ir_send_raw:'红外发射 端口 P2(L3) %1 数组 %2 数组长度 %3 频率 %4',
		QH_BT_START:'蓝牙数据刷新 P5(R0-L1)',
		QH_BT_button:'蓝牙按钮 P5(R0L1) %1',
		QH_BT_variable:'蓝牙变量 P5(R0L1) %1',
		QH_BT_print:'蓝牙发送变量 P5(R0L1) 变量1 %1 变量2 %2 变量3 %3 变量4 %4 变量5 %5',
		QH_serial_change:'软串口定义到 端口 %1',
		QH_serial_jieshouzhi:'串口接收数据比较 端口 %1 如果数据= %2',
		QH_serial_fasong:'串口发送 端口 %1 模式 %2 内容 %3',
		QH_SERIAL_WRITE:'原始输出',
		QH_SERIAL_PRINT:'打印',
		QH_SERIAL_PRINTLN:'打印(自动换行)',
		QH_serial_jieshou:'串口接收 端口 %1 返回字符串',
		QH_serial_suju:'串口有数据可读 端口 %1',
		QH_MP3_bofangx:'播放指定 端口 %1 音量(0-30) %2 曲目 %3',
		QH_MP3_yingliang:'音量调节 端口 %1 音量(0-30) %2',
		QH_MP3_loopplay:'循环播放 端口 %1 音量(0-30) %2 曲目 %3',
		QH_MP3_startpause:'播放/暂停 端口 %1 模式 %2',
		QH_START:'播放',
		QH_PAUSE:'暂停',
		QH_MP3_previous_next:'上一首/下一首 端口 %1 模式 %2',
		QH_PREVIOUS:'上一首',
		QH_NEXT:'下一首',
		QH_MP3_play:'播放音效 音效 %1 端口 %2 音量(0-30) %3',
		QH_play1:'1笑声',
		QH_play2:'2哭声',
		QH_play3:'3坦克',
		QH_play4:'4扫射',
		QH_play5:'5枪声',
		QH_play6:'6变形',
		QH_play7:'7加速',
		QH_play8:'8刹车',
		QH_play9:'9飞行',
		QH_play10:'10直升机',
		QH_play11:'11猫',
		QH_play12:'12狗',
		QH_play13:'13老虎',
		QH_play14:'14鸡',
		QH_ESPuno_define_mp3_directory:'定义MP3 SD卡文件目录 %1 ',
		QH_ESPuno_mp3_designated_play:'模式 %1 端口 %2 音量(0-30) %3 曲目 %4',
		QH_BOFANGX:'播放指定',
		QH_LOOPPLAY:'循环播放',
		QH_display:'数码管 端口 %1 小数位 %2 数字 %3',
		QH_displayoff:'关闭数码管 端口 %1',
		QH_display_samll_refresh_display:'彩屏刷新显示 %1',
		QH_display_samll_HV:'彩屏方向 端口 %1 方向 %2',
		QH_display_samll_HV1:'横屏0度',
		QH_display_samll_HV0:'竖屏90度',
		QH_display_samll_HV2:'横屏180度',
		QH_display_samll_HV3:'竖屏270度',
		QH_display_samll_BL:'彩屏亮度 端口 %1 亮度(0-255) %2',
		QH_display_samll_clr:'颜色 端口 %1 模式 %2 颜色(0-63) %3',
		QH_display_samll_clr1:'刷屏',
		QH_display_samll_clr2:'背景',
		QH_display_samll_flash_pic:'图片显示 端口 %1 横/竖 %2 模式 %3 图片 %4',
		QH_display_samll_HV10:'横屏',
		QH_display_samll_HV11:'竖屏',
		QH_display_samll_pic0:'正常',
		QH_display_samll_pic1:'透明',
		QH_display_samll_pic:'图片显示 %1 模式 %2 地址 %3 起点 X %4 Y %5 宽 高 W %6 H %7',
		QH_display_samll_PS:'画点 端口 %1 X %2 Y %3 颜色(0-63) %4',
		QH_display_samll_PL:'画线/框 端口 %1 模式 %2 起点 X %3 Y %4 终点 X %5 Y %6 颜色(0-63) %7',
		QH_display_samll_pl1:'画线',
		QH_display_samll_pl2:'空心框',
		QH_display_samll_pl3:'实心框',
		QH_display_samll_CIR:'画圆 端口 %1 样式 %2 圆心 X %3 Y %4 半径 R %5 颜色(0-63) %6',
		QH_displaysolidround:'实心圆',
		QH_displayhollowround:'空心圆',
		QH_display_samll_DC:'文本显示 端口 %1 字体 %2 颜色(0-63) %3 起点 X %4 Y %5 内容 %6',
		QH_display_samll_CN:'文本 端口 %1 字号 %2 颜色(0-63) %3 起点 X %4 Y %5 内容 %6',
		QH_display_samll_SBCDC:'带底色文本 端口 %1 字号 %2 底色(0-63) %3 颜色(0-63) %4 起点 X %5 Y %6 内容 %7',
		QH_display_samll_order:'自定义指令 端口 %1 内容 %2 ',
		QH_display_samll_btl:'波特率 端口 %1 BPS %2',
		group_lcd_init2:'初始化 LCD %1 名称 %2 设备地址 %3 SCL %4 SDA %5',
		group_lcd_print:'LCD %1 打印行1 %2 打印行2 %3',
		group_lcd_print2:'LCD %1 在第 %2 行第 %3 列 打印 %4',
		group_lcd_power:'LCD %1 类型 %2',
		QH_ON:'开',
		QH_OFF:'关',
		QH_LCD_STAT_CURSOR:'有光标',
		QH_LCD_STAT_NOCURSOR:'无光标',
		QH_LCD_STAT_BLINK:'闪烁',
		QH_LCD_STAT_NOBLINK:'不闪烁',
		QH_LCD_STAT_CLEAR:'清屏',
		QH_LCD_NOBACKLIGHT:'关闭背光',
		QH_LCD_BACKLIGHT:'打开背光',
		qdp_display_START:' %1 启用接收屏数据 P5(R0-L1)',
		qdp_display_button:'屏按钮 P5(R0-L1)= %1',
		qdp_display_variable:'屏变量 P5(R0-L1) %1',
		qdp_display_print:'发送变量到屏 P5(R0-L1)V %1 值 %2',
		qdp_zkpdisplay_sleep:'屏睡眠 端口 P5 %1',
		QH_displaysleep1:'睡眠',
		QH_displaysleep0:'唤醒',
		qdp_zkpdisplay_buzzer:'屏蜂鸣器 端口 P5 频率 %1 音量(0-100) %2',
		qdp_zkpdisplay_clscolor:'颜色刷屏 端口 P5 颜色 %1',
		qdp_zkpdisplay_color:'颜色 %1',
		qdp_zkpdisplay_pic:'表情刷屏 端口 P5 %1',
		QH_displaypic1:'爱心',
		QH_displaypic2:'惊讶',
		QH_displaypic3:'伤心',
		QH_displaypic4:'捂脸',
		QH_displaypic5:'笑脸',
		QH_displaypic6:'晕',
		QH_displaypic7:'眨眼',
		QH_displaypic8:'赞',
		QH_displaypic9:'学习二维码',
		qdp_zkpdisplay_page:'页面跳转 端口 P5 %1',
		QH_displaypage1:'主菜单',
		QH_displaypage2:'遥控/滑块',
		QH_displaypage3:'遥控/变量',
		QH_displaypage4:'滑块',
		QH_displaypage5:'变量V',
		QH_displaypage6:'按键',
		QH_displaypage7:'串口',
		QH_displaypage8:'随机数',
		QH_displaypage9:'空白页',
		qdp_zkpdisplay_drawinground:'画圆 端口 P5 类型 %1 X %2 Y %3 R %4 十进制颜色 %5',
		QH_displaysolidround:'实心圆',
		QH_displayhollowround:'空心圆',
		qdp_zkpdisplay_function1:'画图 端口 P5 类型 %1 X %2 Y %3 X2W %4 Y2H %5 十进制颜色 %6',
		QH_displayfunction1fill:'区域填充',
		QH_displayfunction1line:'画线',
		QH_displayfunction1draw:'画矩形',
		qdp_zkpdisplay_TEXT:'文字信息 端口 P5 填充 %1 X %2 Y %3 W %4 H %5 文字颜色 %6 背景颜色 %7 内容 %8',
		QH_displaybackcolor0:'切图',
		QH_displaybackcolor1:'单色',
		QH_displaybackcolor2:'图片',
		QH_displaybackcolor3:'无背景',
		qdp_zkpdisplay_TEXT_CN:'文字信息 端口 P5 填充 %1 X %2 Y %3 W %4 H %5 文字颜色 %6 背景颜色 %7 内容 %8',
		qdp_zkpdisplay_order:'自定义指令 端口 P5 %1',
		QH_DISPLAY_MATRIX_ROTATE:'旋转',
		QH_MIRROR:'镜像',
		oled_init:'初始化OLED %1 名称 %2 旋转角度 %3 SCL %4 SDA %5 设备地址 %6',
		oled_page:'%1 OLED %2 刷新页面',
		oled_showBitmap:'OLED %1 显示图像 起点 X %2 Y %3 宽度 %4 高度 %5 图像名称 %6',
		tool_modulus:'点阵格式 %1 取模方式 %2 取模走向 %3 字体 %4 字号 %5 px 宽 %6 px 高 %7 px 内容 %8',
		tool_modulus_show:'图像名称 %1 [%2] 保存到 flash %3 %4',
		oled_clear:'OLED %1 清屏 ',
		u8g2_setContrast:'OLED %1 背光亮度 %2',
		oled_face:'OLED %1 显示图像 起点 X %2 Y %3 内置图标 %4',
		oled_drawPixel:'OLED %1 画点 起点 X %2 Y %3 ',
		oled_drawLine:'OLED %1 画线 起点 X %2 Y %3 终点 X %4 Y %5',
		oled_draw_Str_Line:'OLED %1 画直线 起点 X %2 Y %3 长度 X %4 模式 %5',
		QH_OLED_HOR:'水平',
		QH_OLED_VER:'垂直',
		oled_drawFrame:'OLED %1 画矩形 模式 %2 起点 X %3 Y %4 宽  %5 高 %6',
		oled_drawRFrame:'OLED %1 画圆角矩形 模式 %2 起点 X %3 Y %4 宽  %5 高 %6 半径 %7',
		oled_drawCircle:'OLED %1 画圆 模式 %2 圆心 X %3 Y %4 半径  %5 类型 %6',
		QH_OLED_WHOLE_CICILE:'整圆',
		QH_OLED_UP_R:'右上',
		QH_OLED_UP_L:'左上',
		QH_OLED_LOW_R:'右下',
		QH_OLED_LOW_L:'左下',
		oled_drawEllipse:'OLED %1 画椭圆 模式 %2 圆心 X %3 Y %4 半径 X %5 Y %6 类型 %7',
		QH_OLED_HOLLOW:'空心',
		QH_OLED_SOLID:'实心',
		oled_drawTriangle:'OLED %1 画三角形 A点 X %2 Y %3 B点 X %4 Y %5 C点 X %6 Y %7',
		QH_variables_declare:'声明 %1 变量 类型 %2 名称 %3 赋值为 %4',
		QH_variables_set:'设置 %1 变量 为 %2',
		QH_variables_change:'设置 %1 变量 模式 %2',
		QH_global:'全局',
		QH_local:'局部',
		QH_MATH_INT: '整数',
		QH_MATH_LONG: '长整数',
		QH_MATH_FLOAT: '小数',
		QH_MATH_BOOLEAN: '布尔',
		QH_MATH_BYTE: '字节',
		QH_MATH_CHAR: '字符',
		QH_MATH_STRING: '字符串',
		QH_MATH_UNSIGNED_INT: '无符号整数',
		QH_MATH_WORD: '字',
		QH_MATH_UNSIGNED_LONG: '无符号长整数',
		QH_MATH_UNSIGNED_CHAR: '无符号字符',
		QH_MATH_DOUBLE: '双精度浮点数',
		COOPERATIVESCHEDULER_CATEGORY: '多任务调度器',
        COOPERATIVESCHEDULER_START: '启动多任务调度器',
        COOPERATIVESCHEDULER_SETUP: '多任务调度器 %1 setup',
        COOPERATIVESCHEDULER_SLEEP: '多任务调度器延时 %1 ms',
        QH_EQU:'等于(==)',
		QH_NEQ:'不等于(!=)',
		QH_GTR:'大于(>)',
		QH_LSS:'小于(<)',
		QH_GEQ:'大于等于(>=)',
		QH_LEQ:'小于等于(<=)',
		QH_bit_operator:'位运算 %1 %2 %3',
		QH_AND:'与(&))',
		QH_OR:'或(|)',
		QH_XOR:'异或(^)',
		QH_SHIFT_R:'右移(>>)',
		QH_SHIFT_L:'左移(<<)',
		QH_constrain:'约束 %1 最小 %2 最大 %3 ',
		QH_map:'映射 %1 从[ %2 , %3 ] 到 [ %4 , %5 ]'
    });
    return Blockly;
}

exports = addMsg;
