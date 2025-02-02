import { folders } from "@/data/projects";
import styles from "./page.module.scss";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { ProjectDetail } from "@/components/projectDetail/projectDetail";
import ToTheTopButton from "@/components/toTheTop/toTheTopButton";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = folders
    .flatMap((folder) => folder.projects)
    .find((p) => p.id === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Link className={styles.button} href={"/#projects"}>
          <svg
            width="281"
            height="15"
            viewBox="0 0 281 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.button}
          >
            <path
              d="M0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819456 8.07107 0.428932C7.68054 0.0384079 7.04738 0.0384079 6.65685 0.428932L0.292893 6.79289ZM1 8.5H281V6.5H1V8.5Z"
              fill="black"
            />
          </svg>
        </Link>

        <div className={styles.title_wrapper}>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <h1 className={styles.title}>{project.title}</h1>

          <div className={styles.grid}>
            {project.details.map((content, index) => (
              <ProjectDetail key={index} content={content} />
            ))}
          </div>
        </div>
      </div>
      <ToTheTopButton />
      <Footer />
    </>
  );
}
