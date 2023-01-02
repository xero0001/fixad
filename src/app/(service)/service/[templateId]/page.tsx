export const dynamicParams = true

export async function generateStaticParams() {
  return [{ templateId: '0' }, { templateId: '1' }, { templateId: '2' }]
}

async function getTemplateData(templateId: boolean) {
  const res = await fetch(`https://63aa3285594f75dc1dcae57a.mockapi.io/api/template/templat/${templateId}`, {
    next: { revalidate: 60 },
  })

  const templateInfo = await res.json()

  return templateInfo
}

export default async function templateTest({ params }) {
  const templateData = await getTemplateData(params.templateId)

  return (
    <div>
      <h1>{templateData.name}</h1>
    </div>
  )
}
