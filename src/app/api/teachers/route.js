import { NextResponse } from "next/server";



export async function POST(request){
    try{               
        const {englishName, banglaName, slug,  presentAddress, permanentAddress, dateOfBirth, joiningDate, mobileNumber,  bloodGroup, religion, gender, nidNumber, email, password, designation, indexNo, mpoDate, university, degree, year, city, notes, imageUrl } = await request.json();
        const newTeachers = {englishName, banglaName, slug,  presentAddress, permanentAddress, dateOfBirth, joiningDate, mobileNumber,  bloodGroup, religion, gender, nidNumber, email, password, designation, indexNo, mpoDate, university, degree, year, city, notes, imageUrl }
        console.log(newTeachers); 
        return NextResponse.json(newTeachers)
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed added Teacher",
            error,
        },{status:500})
    }
}