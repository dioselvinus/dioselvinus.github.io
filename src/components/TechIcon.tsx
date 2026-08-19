import {
  siGo,
  siPhp,
  siJavascript,
  siTypescript,
  siPython,
  siLaravel,
  siReact,
  siNextdotjs,
  siVuedotjs,
  siSolid,
  siPostgresql,
  siMysql,
  siRedis,
  siElasticsearch,
  siMongodb,
  siDocker,
  siKubernetes,
  siJenkins,
  siGit,
  siGithub,
  siPrometheus,
  siTailwindcss,
  siNodedotjs,
  siPodman,
  siFastlane,
  siLanggraph,
  siLangchain,
  siFlutter,
  siOry,
  siCloudflare,
  siNestjs,
} from 'simple-icons'

interface TechIconProps {
  tech: string
  className?: string
}

const iconMap: Record<string, { path: string; title: string }> = {
  'Go': { path: siGo.path, title: siGo.title },
  'PHP': { path: siPhp.path, title: siPhp.title },
  'JavaScript': { path: siJavascript.path, title: siJavascript.title },
  'TypeScript': { path: siTypescript.path, title: siTypescript.title },
  'Python': { path: siPython.path, title: siPython.title },
  'Laravel': { path: siLaravel.path, title: siLaravel.title },
  'React': { path: siReact.path, title: siReact.title },
  'ReactJS': { path: siReact.path, title: siReact.title },
  'React Native': { path: siReact.path, title: siReact.title },
  'Next.js': { path: siNextdotjs.path, title: siNextdotjs.title },
  'NextJS': { path: siNextdotjs.path, title: siNextdotjs.title },
  'Vue.js': { path: siVuedotjs.path, title: siVuedotjs.title },
  'VueJS': { path: siVuedotjs.path, title: siVuedotjs.title },
  'SolidJS': { path: siSolid.path, title: siSolid.title },
  'PostgreSQL': { path: siPostgresql.path, title: siPostgresql.title },
  'PostGIS': { path: siPostgresql.path, title: siPostgresql.title },
  'MySQL': { path: siMysql.path, title: siMysql.title },
  'Redis': { path: siRedis.path, title: siRedis.title },
  'Elasticsearch': { path: siElasticsearch.path, title: siElasticsearch.title },
  'MongoDB': { path: siMongodb.path, title: siMongodb.title },
  'Docker': { path: siDocker.path, title: siDocker.title },
  'Kubernetes': { path: siKubernetes.path, title: siKubernetes.title },
  'Jenkins': { path: siJenkins.path, title: siJenkins.title },
  'Git': { path: siGit.path, title: siGit.title },
  'GitHub': { path: siGithub.path, title: siGithub.title },
  'Prometheus': { path: siPrometheus.path, title: siPrometheus.title },
  'Tailwind CSS': { path: siTailwindcss.path, title: siTailwindcss.title },
  'Node.js': { path: siNodedotjs.path, title: siNodedotjs.title },
  'NodeJS': { path: siNodedotjs.path, title: siNodedotjs.title },
  'Podman': { path: siPodman.path, title: siPodman.title },
  'Phalcon PHP': { path: siPhp.path, title: siPhp.title },
  'CodeIgniter': { path: siPhp.path, title: siPhp.title },
  'Fastlane': { path: siFastlane.path, title: siFastlane.title },
  'Langgraph': { path: siLanggraph.path, title: siLanggraph.title },
  'LangChain': { path: siLangchain.path, title: siLangchain.title },
  'Flutter': { path: siFlutter.path, title: siFlutter.title },
  'Ory': { path: siOry.path, title: siOry.title },
  'S3 Compatible': { path: siCloudflare.path, title: siCloudflare.title },
  'NestJS': { path: siNestjs.path, title: siNestjs.title },
}

export function TechIcon({ tech, className = 'w-4 h-4' }: TechIconProps) {
  const icon = iconMap[tech]

  if (!icon) {
    return (
      <span className={className} aria-hidden="true">
        {tech.charAt(0)}
      </span>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  )
}
