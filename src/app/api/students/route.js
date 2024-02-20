import { NextResponse } from "next/server";



export async function POST(request){
    try{               
        const {studentNameEnglish, studentNameBangla, slug, fatherName, presentAddress, permanentAddress, dateOfBirth, studentMobile, gurdianMobile, admissionDate, rollNo, nameOfClass, nationality, gender, bloodGroup, religion, documentType, documentNumber, notes, imageUrl } = await request.json();
        const newStudents = {studentNameEnglish, studentNameBangla, slug, fatherName, presentAddress, permanentAddress, dateOfBirth, studentMobile, gurdianMobile, admissionDate, rollNo, nameOfClass, nationality, gender, bloodGroup, religion, documentType, documentNumber, notes, imageUrl }
        console.log(newStudents); 
        return NextResponse.json(newStudents)
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed added student",
            error,
        },{status:500})
    }
}