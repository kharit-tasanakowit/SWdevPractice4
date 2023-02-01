//@desc Get all hospitals
//@router GET /api/v1/hospitals
//@access Public
exports.getHospitals = (req,res,next)=>{
    res.status(200).json({success:true, msg:'Show all hospitals'});

};

//@desc Get single hospital
//@router GET /api/v1/hospitals/:id
//@access Public
exports.getHospital = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Show all hospital ${req.params.id}`});

};

//@desc Create new hospital
//@router POST /api/v1/hospitals
//@access Private
exports.createHospital = (req,res,next)=>{
    res.status(200).json({success:true, msg:'Create new hospitals'});

};

//@desc Update hospital
//@router PUT /api/v1/hospitals/:id
//@access Private
exports.updateHospital = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Update hospital ${req.params.id}`});

};

//@desc Delete hospital
//@router DELETE /api/v1/hospitals/:id
//@access Private
exports.deleteHospital = (req,res,next)=>{
    res.status(200).json({success:true, msg:`Delete hospital ${req.params.id}`});

};