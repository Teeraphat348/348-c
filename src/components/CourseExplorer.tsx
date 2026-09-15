"use client";

import { useState, type ChangeEvent } from "react";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/types/course";

type CourseExplorerProps = {
  courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFavorite(id: number) {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  function handleReset() {
    setKeyword("");
    setFavoriteIds([]);
  }

  const searchText = keyword.trim().toLowerCase();

  const visibleCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchText) ||
      course.code.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <div style={{ marginBottom: "16px", display: "flex", gap: "12px", alignItems: "center" }}>
        <input
          type="search"
          aria-label="ค้นหารายวิชา"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
          style={{ padding: "8px", width: "300px" }}
        />
        <button type="button" onClick={handleReset} style={{ padding: "8px 16px", cursor: "pointer" }}>
          ล้างเงื่อนไข
        </button>
      </div>

      <p style={{ marginBottom: "16px", fontWeight: "bold" }}>
        จำนวนรายวิชาโปรด: {favoriteIds.length} วิชา
      </p>

      {visibleCourses.length === 0 ? (
        <p style={{ color: "#d9534f", marginTop: "20px" }}>ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "20px" }}>
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isFavorite={favoriteIds.includes(course.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
      )}
    </div>
  );
}