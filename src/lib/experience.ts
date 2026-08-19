const START_DATE = new Date('2022-01-01')

export function getExperienceYears(): number {
  const now = new Date()
  return Math.max(0, now.getFullYear() - START_DATE.getFullYear())
}
