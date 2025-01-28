import { folders } from "@/data/projects";
import styles from "./page.module.scss";

export default function ProjectPage({ params }: { params: { slug: string } }) {
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
          <img src={detail.image} alt={detail.text} />
          <p>{detail.text}</p>
        </div>
      ))}
    </div>
  );
}
