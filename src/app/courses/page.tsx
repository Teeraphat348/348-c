import type { Metadata } from "next"; 
import CourseExplorer from "@/components/CourseExplorer"; 
import { courses } from "@/data/courses"; 
 
export const metadata: Metadata = { 
  title: "รายวิชาทั้งหมด", 
}; 
 
export default function CoursesPage() { 
  return ( 
    <main style={{ padding: "32px 48px", textAlign: "left" }}> 
      <h1 style={{ marginBottom: "20px" }}>รายวิชาทั้งหมด</h1> 
      <CourseExplorer courses={courses} /> 
    </main> 
  ); 
}