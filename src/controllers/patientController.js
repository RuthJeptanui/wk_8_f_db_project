const { error } = require('console');
const pool = require('../config/db');

//creating a new patient




exports.createPatient = async (req, res) => {
    try{
        if (!req.body) {
            return res.status(400).json({ error: 'Request body is missing' });
        }
        const { first_name, last_name, gender, date_of_birth, contact_number, email, address } = req.body;
        const [result]= await pool.query(
            'Insert into patients (first_name, last_name, gender, date_of_birth, contact_number, email, address) values (?,?,?,?,?,?,?)',
            [first_name, last_name, gender, date_of_birth, contact_number, email, address]
        );
        res.status(201).json({ message: 'Patient created successfully', patientId: result.insertId });
    }catch(error){
        console.error('Error creating patient:', error.message);
        res.status(500).json({ error: error.message });
    }
};


//getting all patients
exports.getAllPatients= async(req,res)=>{
    try{
        const[rows] = await pool.query('SELECT * FROM patients');
        res.status(200).json(rows);
    }catch(error){
        console.error('Error fetching patients:', error.message);
        res.status(500).json({ error: error.message });
    }
};

//getting a single patient but their id
exports.getPatientById= async(req,res)=>{
    try{
        const[rows] = await pool.query('SELECT * FROM patients WHERE id=?',[req.params.id]);
        if(rows.length===0){
            return res.status(404).json({message:'Patient not found'});
        }
        res.json(rows[0]);
        res.status(200).json(rows);
    }catch(error){
        console.error('Error fetching patient:', error.message);
        res.status(500).json({ error: error.message });
    }
};

//updating patient by id
exports.updatePatientById= async(req,res)=>{
    try{
        const { first_name, last_name, gender, date_of_birth, contact_number, email, address } = req.body;
        await pool.query(
            'UPDATE patients SET first_name=?, last_name=?, gender=?, date_of_birth=?, contact_number=?, email=?, address=? WHERE id=?',
            [first_name, last_name, gender, date_of_birth, contact_number, email, address, req.params.id]
        );
        res.json({ message: 'Patient updated successfully' });
        resp.status(200).json({ message: 'Patient updated successfully' });
    }catch(error){
        console.error('Error updating patient:', error.message);
        resp.status(500).json({ error: error.message });
    }

};

//deleting patient by id
exports.deletePatientById= async(req,resp)=>{
    try{
        await pool.query('DELETE FROM patients WHERE id=?',[req.params.id]);
        res.json({ message: 'Patient deleted successfully' });
        resp.status(200).json({ message: 'Patient deleted successfully' });
    }catch(error){
        console.error('Error deleting patient:', error.message);
        resp.status(500).json({ error: error.message });
    }
}
