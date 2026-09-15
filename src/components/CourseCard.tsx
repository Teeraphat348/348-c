"use client";

import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function CourseCard({ course, isFavorite, onToggleFavorite }: CourseCardProps) {
  return (
    <article style={{ 
      border: "1px solid #ccc", 
      padding: "16px", 
      borderRadius: "8px", 
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      maxWidth: "500px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: "bold", color: "#555" }}>{course.code}</span>
        <span style={{ 
          padding: "2px 8px", 
          borderRadius: "12px", 
          fontSize: "0.85rem", 
          background: course.isOpen ? "#e6f4ea" : "#fce8e6",
          color: course.isOpen ? "#137333" : "#c5221f"
        }}>
          {course.isOpen ? "เปิดสอน" : "ปิดสอน"}
        </span>
      </div>

      {/* ใช้ course.title แทน course.name */}
      <h3 style={{ margin: "4px 0", fontSize: "1.2rem" }}>{course.title}</h3>
      <p style={{ margin: 0, color: "#666" }}>จำนวนหน่วยกิต: {course.credits} หน่วยกิต</p>

      <div style={{ marginTop: "12px" }}>
        <button
          type="button"
          onClick={() => onToggleFavorite(course.id)}
          style={{ 
            padding: "6px 12px", 
            cursor: "pointer", 
            background: isFavorite ? "#ffebee" : "#f0f0f0", 
            border: "1px solid #ccc", 
            borderRadius: "4px" 
          }}
        >
          {isFavorite ? "❤️ รายวิชาโปรดแล้ว" : "🤍 เพิ่มเป็นรายวิชาโปรด"}
        </button>
      </div>
    </article>
  );
}