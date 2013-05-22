/*
 lMID.maskHides = 1214529900;//"HdAl"
lMID.maskRevealsAll = 1383492673;//"RvlA"
lMID.maskReveals = 1383492691;//"Rvls"
lMID.newObject = 1316429856;//"Nw  "
lMID.channel = 1130917484;//"Chnl"
lMID.mask = 1299409696;//"Msk "
lMID.at = 1098129440;//"At  "
lMID.using = 1433628263;//"Usng"
lMID.userMask = 1433629261;//"UsrM"
lMID.make = 1298866208;//"Mk  "
lMID.indexNumber = 1332896878;//"Ordn"
lMID.target = 1416783732;//"Trgt"
lMID.Null = 1853189228;//"null"
lMID.apply = 1097886841;//"Aply"
lMID.Delete = 1147958304;//"Dlt "
lMID.layer = 1283027488;//"Lyr "
lMID.to = 1411391520;//"T   "
lMID.visible = 1298880115;//"MkVs"
lMID.select = 1936483188;//"slct"
lMID.selection =1718838636;//"fsel"
lMID.set = 1936028772;//"setd"
lMID.userMaskLinked = 1433629299;//"Usrs"
lMID.property = 1349677170;//"Prpr"
*/

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

var createLayerMask = function(doc, layer, fromSelection) {
    var desc = new ActionDescriptor();
    desc.putClass(cTID("Nw  "), cTID("Chnl"));
    
    var ref = new ActionReference();
    ref.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
    desc.putReference(cTID("At  "), ref);
    
    if (fromSelection == true) {
        desc.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlS"));
    } else {
        desc.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
    }
    executeAction(cTID("Mk  "), desc, DialogModes.NO);
}

var addLayerFromFile = function(hdtrDocument, file) {
    var sourceDocument = app.open(file);
    app.activeDocument = sourceDocument;
    app.activeDocument.activeLayer.copy();
    app.activeDocument = hdtrDocument;
    hdtrDocument.paste();
    hdtrDocument.activeLayer.name = (hdtrDocument.artLayers.length -1) + "-" + sourceDocument.name;
    sourceDocument.close();
}

var fillWithGradient = function(startX, startY, endX, endY)
{
    var V1 = new ActionDescriptor();
    var V2 = new ActionDescriptor();
    V2.putUnitDouble(charIDToTypeID("Hrzn"),charIDToTypeID("#Pxl"), startX); // start point X
    V2.putUnitDouble(charIDToTypeID("Vrtc"),charIDToTypeID("#Pxl"), startY);  // start point Y
    V1.putObject(charIDToTypeID("From"),charIDToTypeID("Pnt "), V2);
    var V3 = new ActionDescriptor();
    V3.putUnitDouble(charIDToTypeID("Hrzn"),charIDToTypeID("#Pxl"), endX); // end point X
    V3.putUnitDouble(charIDToTypeID("Vrtc"),charIDToTypeID("#Pxl"), endY); // end point Y
    V1.putObject(charIDToTypeID("T   "),charIDToTypeID("Pnt "), V3);
    V1.putUnitDouble(charIDToTypeID("Opct"),charIDToTypeID("#Prc"), 100); // opacity
    V1.putEnumerated(charIDToTypeID("Type"),charIDToTypeID("GrdT"),charIDToTypeID("Lnr ")); // type (Linear)
    //V1.putEnumerated(charIDToTypeID("Md  "),charIDToTypeID("BlnM"),stringIDToTypeID("lighterColor")); // blend mode (leave this out for "Normal")
    V1.putBoolean(charIDToTypeID("Dthr"), true); // yes, use Dither
    V1.putBoolean(charIDToTypeID("UsMs"), true);
    var V4 = new ActionDescriptor();
    V4.putString(charIDToTypeID("Nm  "), "$$$/DefaultGradient/BlackWhite=Black, White"); // name of gradient to use
    V4.putEnumerated(charIDToTypeID("GrdF"),charIDToTypeID("GrdF"),charIDToTypeID("CstS"));
    V4.putDouble(charIDToTypeID("Intr"), 4096.000000);
    var V5 = new ActionList();
    var V6 = new ActionDescriptor();
    var V7 = new ActionDescriptor();
    V7.putDouble(charIDToTypeID("Cyn "), 75.020000);
    V7.putDouble(charIDToTypeID("Mgnt"), 68.010000);
    V7.putDouble(charIDToTypeID("Ylw "), 67.000000);
    V7.putDouble(charIDToTypeID("Blck"), 90.190000);
    V6.putObject(charIDToTypeID("Clr "),charIDToTypeID("CMYC"), V7);
    V6.putEnumerated(charIDToTypeID("Type"),charIDToTypeID("Clry"),charIDToTypeID("UsrS"));
    V6.putInteger(charIDToTypeID("Lctn"), 0);
    V6.putInteger(charIDToTypeID("Mdpn"), 50);
    V5.putObject(charIDToTypeID("Clrt"), V6);
    var V8 = new ActionDescriptor();
    var V9 = new ActionDescriptor();
    V9.putDouble(charIDToTypeID("Cyn "), 0.000000);
    V9.putDouble(charIDToTypeID("Mgnt"), 0.000000);
    V9.putDouble(charIDToTypeID("Ylw "), 0.000000);
    V9.putDouble(charIDToTypeID("Blck"), 0.000000);
    V8.putObject(charIDToTypeID("Clr "),charIDToTypeID("CMYC"), V9);
    V8.putEnumerated(charIDToTypeID("Type"),charIDToTypeID("Clry"),charIDToTypeID("UsrS"));
    V8.putInteger(charIDToTypeID("Lctn"), 4096);
    V8.putInteger(charIDToTypeID("Mdpn"), 50);
    V5.putObject(charIDToTypeID("Clrt"), V8);
    V4.putList(charIDToTypeID("Clrs"), V5);
    var V10 = new ActionList();
    var V11 = new ActionDescriptor();
    V11.putUnitDouble(charIDToTypeID("Opct"),charIDToTypeID("#Prc"), 100.000000);
    V11.putInteger(charIDToTypeID("Lctn"), 0);
    V11.putInteger(charIDToTypeID("Mdpn"), 50);
    V10.putObject(charIDToTypeID("TrnS"), V11);
    var V12 = new ActionDescriptor();
    V12.putUnitDouble(charIDToTypeID("Opct"),charIDToTypeID("#Prc"), 100.000000);
    V12.putInteger(charIDToTypeID("Lctn"), 4096);
    V12.putInteger(charIDToTypeID("Mdpn"), 50);
    V10.putObject(charIDToTypeID("TrnS"), V12);
    V4.putList(charIDToTypeID("Trns"), V10);
    V1.putObject(charIDToTypeID("Grad"),charIDToTypeID("Grdn"), V4);
    executeAction(charIDToTypeID("Grdn"), V1, DialogModes.NO);
}
