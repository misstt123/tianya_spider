function TY_registerInterface(t, i, a) {
    var s, c, u, e = (new Date).getTime() / 1e3, o = !1;
    "https:" == location.protocol && (o = !0);
    for (var l in t) c = parseInt(t[l].cache || null, 10), s = a + t[l].path, u = l.split("."), u > 1 && "TY" == u[0] && "undefined" == typeof TY[u[1]] && (TY[u[1]] = {}), s += isNaN(c, 10) ? "?_v=" + i : "?_t=" + parseInt(c ? e / c : e, 10), t[l].path = o ? s.replace(/^http:/, "https:") : s, t[l].charset = t[l].charset || "utf-8", TY.module.add(l, t[l])
}

TY(document).data("TY.core.interface", !0);
var TY_INTERFACE = {
    "TY.App": {
        path: "http://static.tianyaui.com/global/ty/core/TY.App.js",
        type: "js",
        rely: ["TY.util.Template", "TY.util.History"]
    },
    "TY.util.json": {path: "http://static.tianyaui.com/global/ty/util/json2_6ec342b.js", type: "js"},
    "TY.util.autoTextarea": {path: "http://static.tianyaui.com/global/ty/util/autoTextarea_890680d.js", type: "js"},
    "TY.util.textChange": {path: "http://static.tianyaui.com/global/ty/util/textChange_bd760e3.js", type: "js"},
    "TY.util.livequery": {path: "http://static.tianyaui.com/global/ty/util/jquery.livequery_38fd091.js", type: "js"},
    "TY.util.cursorPoint": {
        path: "http://static.tianyaui.com/global/ty/util/TY.util.cursorPoint_083246a.js",
        type: "js",
        rely: ["TY.util.textChange"]
    },
    "TY.util.validateEngine-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/validationEngine.jquery_2f01118.css",
        type: "css"
    },
    "TY.util.validateEngine-lang-zhcn": {
        path: "http://static.tianyaui.com/global/ty/util/validate/languages/jquery.validationEngine-zh_CN_ea0d676.js",
        type: "js"
    },
    "TY.util.validateEngine-zhcn": {
        path: "http://static.tianyaui.com/global/ty/util/validate/jquery.validationEngine_b695b5f.js",
        type: "js",
        rely: ["TY.util.validateEngine-css", "TY.util.validateEngine-lang-zhcn"]
    },
    "TY.util.validateEngine": {
        path: "http://static.tianyaui.com/global/ty/util/validate/jquery.validationEngine_b695b5f.js",
        type: "js",
        rely: ["TY.util.validateEngine-css"]
    },
    "TY.util.validate": {path: "/util/TY.util.validate.js", type: "js"},
    "TY.util.ajaxupload": {path: "http://static.tianyaui.com/global/ty/util/ajaxupload_6533fd0.js", type: "js"},
    "TY.util.form": {path: "http://static.tianyaui.com/global/ty/util/jquery.form_3f71a9a.js", type: "js"},
    "TY.util.jqvalidate": {
        path: "http://static.tianyaui.com/global/ty/util/validate/jquery.validate_90904fd.js",
        type: "js"
    },
    "TY.util.placeholder": {
        path: "http://static.tianyaui.com/global/ty/util/jquery.placeholder_094f591.js",
        type: "js"
    },
    "TY.util.clipboard": {
        path: "http://static.tianyaui.com/global/ty/util/clipboard/zeroclipboard_9d5c754.js",
        type: "js"
    },
    "TY.util.imgPng": {
        path: "http://static.tianyaui.com/global/ty/util/image/DD_belatedPNG_0.0.8a_4d3d016.js",
        type: "js"
    },
    "TY.util.uploadify": {path: "http://static.tianyaui.com/global/ty/util/uploadify/upload_25ea16a.js", type: "js"},
    "TY.util.imgareaselect-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/imgareaselect_43acd7f.css",
        type: "css"
    },
    "TY.util.imgareaselect": {
        path: "http://static.tianyaui.com/global/ty/util/image/jquery.imgareaselect_9aff0c4.js",
        type: "js",
        rely: ["TY.util.imgareaselect-css"]
    },
    "TY.util.imageRotate": {
        path: "http://static.tianyaui.com/global/ty/util/image/jquery.rotate_e82202d.js",
        type: "js"
    },
    "TY.util.imageResize": {
        path: "http://static.tianyaui.com/global/ty/util/image/TY.util.imageResize_2ad46b2.js",
        type: "js"
    },
    "TY.util.jsize": {path: "http://static.tianyaui.com/global/ty/util/jquery.sizes_314c029.js", type: "js"},
    "TY.util.iframeResize": {
        path: "http://static.tianyaui.com/global/ty/util/TY.util.iframeResize_bf8a2a9.js",
        type: "js"
    },
    "TY.util.transit": {path: "http://static.tianyaui.com/global/ty/util/jquery.transit_7e7b651.js", type: "js"},
    "TY.util.pinify": {path: "http://static.tianyaui.com/global/ty/util/jquery.pinify_26a7932.js", type: "js"},
    "TY.util.thickbox-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/thickbox_aaa5649.css",
        type: "css"
    },
    "TY.util.thickbox": {
        path: "http://static.tianyaui.com/global/ty/util/thickbox_c8c3aec.js",
        type: "js",
        rely: ["TY.util.thickbox-css"]
    },
    "TY.util.dateformat": {path: "http://static.tianyaui.com/global/ty/util/date/date.format_fad9590.js", type: "js"},
    "TY.util.invoke": {path: "http://static.tianyaui.com/global/ty/util/TY.util.invoke_e5fda32.js", type: "js"},
    "TY.util.highlight": {path: "http://static.tianyaui.com/global/ty/util/jquery.dynacloud_047a6ef.js", type: "js"},
    "TY.util.pwdStrength": {
        path: "http://static.tianyaui.com/global/ty/util/password_strength_plugin_b3f30a3.js",
        type: "js"
    },
    "TY.util.lazyload": {
        path: "http://static.tianyaui.com/global/ty/util/image/jquery.lazyload_6aa38e2.js",
        type: "js"
    },
    "TY.util.StringBuffer": {
        path: "http://static.tianyaui.com/global/ty/util/TY.util.StringBuffer_9ee15ff.js",
        type: "js"
    },
    "TY.util.Template": {
        path: "http://static.tianyaui.com/global/ty/util/TY.util.Template_5b51d2d.js",
        type: "js",
        rely: ["TY.util.StringBuffer"]
    },
    "TY.util.History": {path: "http://static.tianyaui.com/global/ty/util/TY.util.History_caa0a74.js", type: "js"},
    "TY.util.Voice": {path: "http://static.tianyaui.com/global/ty/util/TY.util.Voice_eee3a25.js", type: "js"},
    "TY.util.userAction": {path: "http://static.tianyaui.com/global/ty/util/TY.util.userAction_da49a2d.js", type: "js"},
    "TY.util.userActionRl": {
        path: "http://static.tianyaui.com/global/ty/util/TY.util.userActionRl_f58083e.js",
        type: "js"
    },
    "TY.util.scrollbar": {path: "http://static.tianyaui.com/global/ty/util/TY.util.scrollbar_ddb8e24.js", type: "js"},
    "TY.util.qrcode": {path: "http://static.tianyaui.com/global/ty/util/jquery.qrcode.min_8c0b79c.js", type: "js"},
    "TY.util.multiSelect": {
        path: "http://static.tianyaui.com/global/ty/util/TY.util.multiSelect_e431329.js",
        type: "js"
    },
    "TY.io.request": {path: "http://static.tianyaui.com/global/ty/io/request_eb617e0.js", type: "js"},
    "TY.io.storage": {
        path: "http://static.tianyaui.com/global/ty/io/storage_b23f26c.js",
        type: "js",
        rely: ["TY.util.json"]
    },
    "TY.io.cookie": {path: "http://static.tianyaui.com/global/ty/io/cookie_bb56317.js", type: "js"},
    "TY.io.postMessage": {path: "http://static.tianyaui.com/global/ty/io/TY.io.postMessage_4605cb7.js", type: "js"},
    "TY.ui.mouse": {path: "http://static.tianyaui.com/global/ty/ui/jquery.ui.mouse_e2899cf.js", type: "js"},
    "TY.ui.draggable": {
        path: "http://static.tianyaui.com/global/ty/ui/jquery.ui.draggable_2b812d7.js",
        type: "js",
        rely: ["TY.ui.mouse"]
    },
    "TY.ui.resizable": {
        path: "http://static.tianyaui.com/global/ty/ui/jquery.ui.resizable_08fd909.js",
        type: "js",
        rely: ["TY.ui.mouse"]
    },
    "TY.ui.pop-css": {path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.pop_38cc7b2.css", type: "css"},
    "TY.ui.mod": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.mod_01c57b4.js", type: "js"},
    "TY.ui.pop": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.pop_624ba0b.js",
        type: "js",
        rely: ["TY.ui.pop-css"]
    },
    "TY.ui.popV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.popV2_34c6908.js",
        type: "js",
        rely: ["TY.ui.pop-css"]
    },
    "TY.ui.showAd": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.showAd_1d38b06.js", type: "js"},
    "TY.ui.friend-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.friend_5be28b9.css",
        type: "css"
    },
    "TY.ui.friend": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.friend_32f86ff.js",
        type: "js",
        rely: ["TY.util.cursorPoint", "TY.ui.friend-css"]
    },
    "TY.ui.friendV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.friendV2_d2d7aa5.js",
        type: "js",
        rely: ["TY.util.cursorPoint", "TY.ui.friend-css"]
    },
    "TY.ui.photo-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.photo_46507cb.css",
        type: "css"
    },
    "TY.ui.photo": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.photo_88708b6.js",
        type: "js",
        rely: ["TY.ui.photo-css", "TY.util.cursorPoint"]
    },
    "TY.ui.photoV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.photoV2_a36ff60.js",
        type: "js",
        rely: ["TY.ui.photo-css", "TY.util.cursorPoint", "TY.util.imageResize"]
    },
    "TY.ui.photo-cssV3": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.photoV3_a995bae.css",
        type: "css"
    },
    "TY.ui.photoV3": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.photoV3_dbd323e.js",
        type: "js",
        rely: ["TY.ui.photo-cssV3", "TY.util.cursorPoint", "TY.util.imageResize"]
    },
    "TY.ui.video-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.video_73a5555.css",
        type: "css"
    },
    "TY.ui.video": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.video_08d3a8e.js",
        type: "js",
        rely: ["TY.ui.video-css", "TY.util.cursorPoint"]
    },
    "TY.ui.videoV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.videoV2_24b170e.js",
        type: "js",
        rely: ["TY.ui.video-css", "TY.util.cursorPoint"]
    },
    "TY.ui.tips-css": {path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.tips_6cd5f9a.css", type: "css"},
    "TY.ui.tips": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.tips_a148e74.js",
        type: "js",
        rely: ["TY.ui.tips-css"]
    },
    "Qing.ui.tips-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/qing.ui.tips_16d5767.css",
        type: "css"
    },
    "Qing.ui.tips": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.tips_a148e74.js",
        type: "js",
        rely: ["Qing.ui.tips-css"]
    },
    "TY.ui.topic-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.topic_935f8f6.css",
        type: "css"
    },
    "TY.ui.topic": {path: "/ui/TY.ui.topicV.js", type: "js", rely: ["TY.util.cursorPoint", "TY.ui.topic-css"]},
    "TY.ui.topicV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.topicV2_e2a68ab.js",
        type: "js",
        rely: ["TY.util.cursorPoint", "TY.ui.topic-css"]
    },
    "TY.ui.face-css": {path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.face_5b47731.css", type: "css"},
    "TY.ui.face": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.face_51782e3.js",
        type: "js",
        rely: ["TY.util.cursorPoint", "TY.ui.face-css"]
    },
    "TY.ui.faceV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.faceV2_a64aebb.js",
        type: "js",
        rely: ["TY.util.cursorPoint", "TY.ui.face-css"]
    },
    "TY.ui.datepicker-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/jquery-ui-1.8.16.custom_dff79d8.css",
        type: "css"
    },
    "TY.ui.datepicker": {
        path: "http://static.tianyaui.com/global/ty/ui/jquery.ui.datepicker_f7bedea.js",
        type: "js",
        rely: ["TY.ui.datepicker-css"]
    },
    "TY.ui.scrollable": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.scrollable_8d35de4.js", type: "js"},
    "TY.ui.tab": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.tab_24d5536.js", type: "js"},
    "TY.ui.loadingImg": {
        path: "http://static.tianyaui.com/global/ty/ui/jquery.activity-indicator-1.0.0_dd2b9f0.js",
        type: "js"
    },
    "TY.ui.musicbox-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.musicbox_e755366.css",
        type: "css"
    },
    "TY.ui.musicbox": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.musicbox_05820cf.js",
        type: "js",
        rely: ["TY.ui.musicbox-css"]
    },
    "TY.ui.musicboxV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.musicboxV2_7d21c96.js",
        type: "js",
        rely: ["TY.ui.musicbox-css"]
    },
    "TY.ui.selectbox-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.selectbox_94e08cf.css",
        type: "css"
    },
    "TY.ui.selectbox": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.selectbox_a162677.js",
        type: "js",
        rely: ["TY.ui.selectbox-css"]
    },
    "TY.ui.twitterPost-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.twitterPost_7725830.css",
        type: "css"
    },
    "TY.ui.twitterPost": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.twitterPost_877de48.js",
        type: "js",
        rely: ["TY.util.cursorPoint", "TY.ui.twitterPost-css"]
    },
    "TY.ui.popWrap-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.popWrap_ca73f66.css",
        type: "css"
    },
    "TY.ui.popWrap": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.popWrap_347dcbe.js",
        type: "js",
        rely: ["TY.ui.popWrap-css"]
    },
    "TY.ui.bbsPost-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.bbsPost_52267c2.css",
        type: "css"
    },
    "TY.ui.bbsPost": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.bbsPost_e763a64.js",
        type: "js",
        rely: ["TY.ui.bbsPost-css", "TY.util.userAction"]
    },
    "TY.ui.activity-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.activity_8a28a4e.css",
        type: "css"
    },
    "TY.ui.activity": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.activity_88b6a4f.js",
        type: "js",
        rely: ["TY.ui.activity-css"]
    },
    "TY.ui.TipsWall": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.TipsWall_66ea500.js", type: "js"},
    "TY.ui.menu": {
        path: "http://static.tianyaui.com/global/ty/ui/jquery.ui.menu_8d82ced.js",
        type: "js",
        rely: ["TY.ui.autocomplete-css"]
    },
    "TY.ui.position": {
        path: "http://static.tianyaui.com/global/ty/ui/jquery.ui.position_7e7d1f0.js",
        type: "js",
        rely: ["TY.ui.autocomplete-css"]
    },
    "TY.ui.combo-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.combo_0ede770.css",
        type: "css"
    },
    "TY.ui.combo": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.combo_a521e2b.js",
        type: "js",
        rely: ["TY.ui.combo-css"]
    },
    "TY.ui.bbsPostExtra-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.bbsPostExtra_dae5312.css",
        type: "css"
    },
    "TY.ui.bbsPostExtra": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.bbsPost-extra_656967e.js",
        type: "js",
        rely: ["TY.ui.bbsPostExtra-css"]
    },
    "TY.ui.focus-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.focus_a299a1c.css",
        type: "css"
    },
    "TY.ui.focus": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.focus_75a352a.js",
        type: "js",
        rely: ["TY.ui.focus-css"]
    },
    "TY.ui.sendMsg-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.sendMsg_85e6598.css",
        type: "css"
    },
    "TY.ui.sendMsg": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.sendMsg_b899468.js",
        type: "js",
        rely: ["TY.ui.sendMsg-css", "TY.util.userAction"]
    },
    "TY.ui.sendMsgV2-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.sendMsgV2_fb85399.css",
        type: "css"
    },
    "TY.ui.sendMsgV2": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.sendMsgV2_d896b27.js",
        type: "js",
        rely: ["TY.ui.sendMsgV2-css", "TY.util.userAction"]
    },
    "TY.ui.scrollTop-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.scrolltop_a1a5214.css",
        type: "css"
    },
    "TY.ui.scrollTop": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.scrolltop_5514fc2.js",
        type: "js",
        rely: ["TY.ui.scrollTop-css"]
    },
    "TY.ui.identity-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.identity_63a2919.css",
        type: "css"
    },
    "TY.ui.identity": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.identity_432fc7e.js",
        type: "js",
        rely: ["TY.ui.identity-css"]
    },
    "TY.ui.nav-css": {path: "http://static.tianyaui.com/global/bbs/web/static/css/nav2_0.css", type: "css", cache: 600},
    "TY.ui.nav": {
        path: "http://static.tianyaui.com/global/bbs/web/static/js/nav2_0.js",
        rely: ["TY.ui.nav-css"],
        type: "js",
        cache: 600
    },
    "TY.ui.Pager": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.Pager_6e06038.js",
        type: "js",
        rely: ["TY.util.Template"]
    },
    "TY.ui.dashang": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.dashang_5b01f44.js", type: "js"},
    "TY.ui.hongbao": {path: "http://static.tianyaui.com/global/ty/ui/TY.ui.hongbao_8eb1206.js", type: "js"},
    "TY.ui.survey-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.survey_f3f9d53.css",
        type: "css"
    },
    "TY.ui.survey": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.survey_d855683.js",
        type: "js",
        rely: ["TY.ui.survey-css"]
    },
    "TY.ui.vipPay-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.vipPay_8ba3602.css",
        type: "css"
    },
    "TY.ui.vipPay": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.vipPay_5d81a53.js",
        type: "js",
        rely: ["TY.ui.vipPay-css"]
    },
    "TY.ui.voiceIdentity-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.voiceIdentity_f252ca5.css",
        type: "css"
    },
    "TY.ui.voiceIdentity": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.voiceIdentity_c11d792.js",
        type: "js",
        rely: ["TY.ui.voiceIdentity-css"]
    },
    "TY.ui.msgPay-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.msgPay_9202cc0.css",
        type: "css"
    },
    "TY.ui.msgPay": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.msgPay_c5e178b.js",
        type: "js",
        rely: ["TY.ui.msgPay-css", "TY.util.userAction"]
    },
    "TY.ui.draft-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.draft_dc6f57a.css",
        type: "css"
    },
    "TY.ui.draft": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.draft_5e1bdf9.js",
        type: "js",
        rely: ["TY.ui.draft-css"]
    },
    "TY.ui.emotion-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.emotion_dc60f93.css",
        type: "css"
    },
    "TY.ui.emotion": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.emotion_9c1256c.js",
        type: "js",
        rely: ["TY.data.emotion", "TY.util.scrollbar", "TY.ui.emotion-css"]
    },
    "TY.data.emotion": {
        path: "http://static.tianyaui.com/global/ty/data/TY.data.emotion_5b8f957.js",
        type: "js",
        rely: null
    },
    "TY.ui.xuanshang": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.xuanshang_51937e7.js",
        type: "js",
        charset: "utf-8",
        rely: null
    },
    "TY.ui.photoShang-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.ui.photoShang_e4bd9cf.css",
        type: "css",
        charset: "utf-8",
        rely: null
    },
    "TY.ui.photoShang": {
        path: "http://static.tianyaui.com/global/ty/ui/TY.ui.photoShang_39b228f.js",
        type: "js",
        charset: "utf-8",
        rely: ["TY.ui.photoShang-css", "TY.util.ajaxupload"]
    },
    "TY.view.page-css": {
        path: "http://static.tianyaui.com/global/ty/resources/css/TY.view.page_3a77634.css",
        type: "css"
    },
    "TY.view.template": {path: "http://static.tianyaui.com/global/ty/view/TY.view.template_5012723.js", type: "js"},
    "TY.view.page": {
        path: "http://static.tianyaui.com/global/ty/view/TY.view.page_3279c8e.js",
        type: "js",
        rely: ["TY.view.page-css"]
    },
    "TY.view.artTemplate": {
        path: "http://static.tianyaui.com/global/ty/view/TY.view.artTemplate_75d1b30.js",
        type: "js"
    },
    "TY.data.area": {path: "http://static.tianyaui.com/global/ty/data/TY_province_city_bd6301c.js", type: "js"},
    "TY.data.region": {path: "http://static.tianyaui.com/global/ty/data/TY.data.region_dd2124a.js", type: "js"},
    "TY.data.date": {path: "http://static.tianyaui.com/global/ty/data/TY.data.date_fa206a6.js", type: "js"}
};
TY_registerInterface(TY_INTERFACE, "", "");