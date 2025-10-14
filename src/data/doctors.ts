export type Doctor = {
  slug: string
  name: string
  role: string
  image: string
  summary: string
  credentials?: string[]
}

import drNarpat from '../../images/Narpat.jpg'
import drKalpesh from '../../images/Kalpesh.jpg'
import drPriyank from '../../images/priyank.jpg'

export const doctors: Doctor[] = [
  {
    slug: 'narpat-solanki',
    name: 'Dr. Narpat Solanki',
    role: 'Glaucoma, LASIK, Cataract & Refractive',
    image: drNarpat,
    summary:
      '35+ years experience with 80,000+ surgeries; Founder & Medical Director – DSEH; Karnataka Rajyotsava Awardee (2003).',
    credentials: [
      "Master's in Ophthalmology – Rajasthan University",
      'Founder & Medical Director – Dr. Solanki Eye Hospital (DSEH)',
      'Karnataka Rajyotsava Award (2003)',
      'Expert in Glaucoma, LASIK, Cataract & Refractive surgeries',
      'Has trained 100+ ophthalmologists across India',
    ],
  },
  {
    slug: 'kalpesh-h-jain',
    name: 'Dr. Kalpesh H Jain',
    role: 'Cataract & Refractive Surgery',
    image: drKalpesh,
    summary:
      'Trainer of 70+ surgeons; expertise in LASIK, ReLEx SMILE, ICL, and advanced IOLs.',
    credentials: [
      'MBBS – Sri Devaraj Urs Medical College, Karnataka',
      'Postgraduate in Ophthalmology – KIMS, Hubli',
      'Diplomate of National Board (DNB), 2008',
      'Fellowship – Phacoemulsification & Refractive Surgery, Nethradhama Eye Hospital',
      'Trainer of 70+ eye surgeons in Phacoemulsification',
      'Expert in LASIK, ReLEx SMILE, ICL, advanced IOL implants',
    ],
  },
  {
    slug: 'priyank',
    name: 'Dr. Priyank',
    role: 'Ophthalmologist',
    image: drPriyank,
    summary: 'Compassionate care with clinical excellence across ophthalmology.',
  },
]

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug)
}

