import { folders } from "@/data/projects";
import styles from "./page.module.scss";
import Image from "next/image";

// Типизация параметров
interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = folders
    .flatMap((folder) => folder.projects)
    .find((p) => p.id === params.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className={styles.projectPage}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.details.map((detail, index) => (
        <div key={index} className={styles.projectDetail}>
          <Image
            src={detail.image}
            alt={detail.text}
            width={500}
            height={300}
          />
          <p>{detail.text}</p>
        </div>
      ))}
    </div>
  );
}
