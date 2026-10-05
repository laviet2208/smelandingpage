'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

const portraitFiles = ['pham-manh-linh', 'bui-quang-hung', 'do-duc-dong', 'nguyen-thi-hanh', 'chu-thi-minh-hue', 'nguyen-duc-hieu', 'le-van-vinh', 'le-minh-duc', 'la-trinh-hoang-viet']

function Portrait({ file, name }: { file: string; name: string }) {
  return (
    <div className="relative w-[68px] sm:w-[80px] aspect-[680/1024] overflow-hidden rounded-sm bg-muted border border-border">
      <Image src={`/members/${file}.jpg`} alt={name} fill sizes="(max-width: 640px) 68px, 80px" className="object-cover" />
    </div>
  )
}

const members = [
  ['PGS. TS. Phạm Mạnh Linh', 'Assoc. Prof. Pham Manh Linh', 'Khoa Công nghệ Thông tin, Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội', 'Faculty of Information Technology, University of Engineering and Technology, Vietnam National University, Hanoi'],
  ['TS. Bùi Quang Hưng', 'Dr. Bui Quang Hung', 'Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội', 'University of Engineering and Technology, Vietnam National University, Hanoi'],
  ['TS. Đỗ Đức Đông', 'Dr. Do Duc Dong', 'Khoa Công nghệ Thông tin, Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội', 'Faculty of Information Technology, University of Engineering and Technology, Vietnam National University, Hanoi'],
  ['TS. Nguyễn Thị Hạnh', 'Dr. Nguyen Thi Hanh', 'Trường Đại học FPT', 'FPT University'],
  ['TS. Chu Thị Minh Huệ', 'Dr. Chu Thi Minh Hue', 'Trường Đại học Thủy lợi', 'Thuyloi University'],
  ['TS. Nguyễn Đức Hiếu', 'Dr. Nguyen Duc Hieu', 'Học viện Kỹ thuật Mật mã', 'Academy of Cryptography Techniques'],
  ['TS. Lê Văn Vinh', 'Dr. Le Van Vinh', 'Trường Đại học Công nghệ Kỹ thuật Vinh', 'Vinh University of Engineering and Technology'],
  ['TS. Lê Minh Đức', 'Dr. Le Minh Duc', 'Chương trình liên kết đào tạo Swinburne Việt Nam', 'Swinburne Vietnam Alliance Program'],
  ['ThS. La Trịnh Hoàng Việt', 'La Trinh Hoang Viet, Master’s degree', 'Trung tâm Quy hoạch và Điều tra Tài nguyên nước Quốc gia', 'National Center for Water Resources Planning and Investigation'],
] as const

function splitName(label: string, isVietnamese: boolean) {
  if (isVietnamese) {
    const match = label.match(/^(PGS\. TS\.|TS\.|ThS\.|CN\.) (.+)$/)
    return { name: match?.[2] ?? label, title: match?.[1] ?? '' }
  }
  const match = label.match(/^(Assoc\. Prof\.|Dr\.) (.+)$/)
  if (match) return { name: match[2], title: match[1] }
  const [name, title = ''] = label.split(', ')
  return { name, title }
}

function MemberProfile({ file, label, institution, isVietnamese }: {
  file: string
  label: string
  institution?: string
  isVietnamese: boolean
}) {
  const { name, title } = splitName(label, isVietnamese)
  return (
    <li className="flex items-start gap-5 sm:gap-6 min-w-0 rounded-xl bg-background/70 p-5 sm:p-6">
      <div className="shrink-0"><Portrait file={file} name={name} /></div>
      <div className="min-w-0 py-1">
        <p className="text-xs font-medium text-primary mb-2">{title}</p>
        <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground leading-snug">{name}</h4>
        {institution && <p className="mt-3 text-sm text-muted-foreground leading-6">{institution}</p>}
      </div>
    </li>
  )
}

export function CoreMembers() {
  const t = useTranslations('members')
  const isVietnamese = useLocale() === 'vi'

  return (
    <div className="space-y-12 sm:space-y-16">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-6">{t('core')}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {members.map(([nameVi, nameEn, institutionVi, institutionEn], index) => (
            <MemberProfile
              key={nameVi}
              file={portraitFiles[index]}
              label={isVietnamese ? nameVi : nameEn}
              institution={isVietnamese ? institutionVi : institutionEn}
              isVietnamese={isVietnamese}
            />
          ))}
        </ul>
      </div>
      <div className="border-t border-border pt-8 sm:pt-10">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-6">{t('committee')}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <MemberProfile
            file="la-trinh-hoang-viet"
            label={isVietnamese ? 'ThS. La Trịnh Hoàng Việt' : 'La Trinh Hoang Viet, Master’s degree'}
            isVietnamese={isVietnamese}
          />
          <MemberProfile
            file="nguyen-duc-quyen"
            label={isVietnamese ? 'CN. Nguyễn Đức Quyền' : 'Nguyen Duc Quyen, Bachelor’s degree'}
            isVietnamese={isVietnamese}
          />
        </ul>
      </div>
    </div>
  )
}