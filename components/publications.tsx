'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export function Publications() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('journals')
  const t = useTranslations('publications')
  const locale = useLocale()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const journalArticles = [
    {
      authors: 'Duc Minh Le, Duc-Hanh Dang, and Hieu Dinh Vo',
      title: 'Layered microservices architecture: A multitree-based domain-driven approach',
      journal: 'Information and Software Technology',
      volume: '183:107720',
      year: 2025,
      impact: 'SCIE; IF: 4.3 / Q1'
    },
    {
      authors: 'Duc-Hanh Dang, Duc Minh Le, and Van-Vinh Le',
      title: 'AGL: Incorporating behavioral aspects into domain-driven design',
      journal: 'Information and Software Technology',
      volume: '163:107284',
      year: 2023,
      impact: 'SCIE; IF: 3.86 / Q1'
    },
    {
      authors: 'Thi-Hanh Nguyen and Duc-Hanh Dang',
      title: 'TC4MT: A Specification-Driven Testing Framework for Model Transformations',
      journal: 'International Journal of Software Engineering and Knowledge Engineering',
      volume: '33(6): 953–991',
      year: 2023,
      impact: 'SCIE; IF: 0.9'
    },
    {
      authors: 'Thi-Hanh Nguyen and Duc-Hanh Dang',
      title: 'On Integrating Multiple Restriction Domains to Automatically Generate Test Cases of Model Transformations',
      journal: 'Informatica',
      volume: '47(1):21-42',
      year: 2023,
      impact: 'Scopus'
    },
    {
      authors: 'Ngoc-Khai Nguyen, Anh-Hoang Truong, and Duc-Hanh Dang',
      title: 'Finding memory bound of cloned objects in software transactional memory programs',
      journal: 'International Journal of Software Engineering and Knowledge Engineering',
      volume: '32(6):791-818',
      year: 2022,
      impact: 'SCIE; IF: 1.0 / Q4'
    },
    {
      authors: 'Duc Minh Le, Duc-Hanh Dang, and Viet-Ha Nguyen',
      title: 'Generative Software Module Development for Domain-Driven Design with Annotation-Based Domain Specific Language',
      journal: 'Information and Software Technology',
      volume: '120:106239',
      year: 2020,
      impact: 'SCIE; IF: 2.73 / Q2'
    },
    {
      authors: 'Minh-Hue Chu, Duc-Hanh Dang, Ngoc-Binh Nguyen, and Anh-Hoang Truong',
      title: 'USLTG: Test Case Automatic Generation by Transforming Use Cases',
      journal: 'International Journal of Software Engineering and Knowledge Engineering',
      volume: '29(9):1313-1345',
      year: 2019,
      impact: 'SCIE; IF: 0.88 / Q3'
    },
    {
      authors: 'Minh-Hue Chu, Duc-Hanh Dang, Ngoc-Binh Nguyen, and Duc Minh Le',
      title: 'USL: A Domain-Specific Language for Precise Specification of Use Cases and Its Transformations',
      journal: 'Informatica',
      volume: '42(3):325-343',
      year: 2018,
      impact: 'Scopus'
    },
    {
      authors: 'Duc Minh Le, Duc-Hanh Dang, and Viet-Ha Nguyen',
      title: 'On Domain Driven Design Using Annotation-Based Domain Specific Language',
      journal: 'Computer Languages, Systems & Structures',
      volume: '54:199-235',
      year: 2018,
      impact: 'SCIE; IF: 1.71 / Q2'
    },
    {
      authors: 'Duc-Hanh Dang, Anh-Hoang Truong, and Martin Gogolla',
      title: 'Checking the Conformance between Models Based on Scenario Synchronization',
      journal: 'Journal of Universal Computer Science (J.UCS)',
      volume: '16(17):2293–2312',
      year: 2010,
      impact: 'SCIE; IF: 0.57 / Q2'
    },
    {
      authors: 'Tanveer Mustafa, Karsten Sohr, Duc-Hanh Dang, Michael Drouineaud, and Stefan Kowski',
      title: 'Implementing Advanced RBAC Administration Functionality with USE',
      journal: 'Electronic Communication of the European Association of Software Science and Technology (ECEASST)',
      volume: '15:1–17',
      year: 2008,
      impact: 'Scopus; Q3'
    }
  ]

  const conferenceProceedings = [
    {
      authors: 'Van-Vinh Le, Nhat-Hoang Nguyen, Duc-Quyen Nguyen, and Duc-Hanh Dang',
      title: 'A Method for Composing Concerns into a Unified Domain Model in Domain-Driven Design',
      conference: '14th Int. Sym. Information and Communication Technology (SoICT)',
      year: '2025 (accepted)',
      ranking: 'Scopus'
    },
    {
      authors: 'Hoang-Viet Trinh La and Duc-Hanh Dang',
      title: 'Transforming Operationalised iStar Models into Temporal Semantics and Event-B for Consistency Assurance',
      conference: '17th Int. Conf. Knowledge and Systems Engineering (KSE)',
      year: 2025,
      ranking: 'Scopus'
    },
    {
      authors: 'Duc-Hanh Dang, Hoang-Lan Le, Duc-Quyen Nguyen, and Minh-Hai Dinh',
      title: 'On Specifying and Verifying OCL Temporal Properties',
      conference: '19th Int. Conf. Computing and Communication Technologies (RIVF)',
      year: 2025,
      ranking: 'Scopus'
    },
    {
      authors: 'Duc-Hanh Dang, Trong-Nghia Be, Minh-Hai Dinh, and Hoang-Lan Le',
      title: 'On Automatic Test Case Generation From Use Case Specification',
      conference: '16th Int. Conf. Knowledge and Systems Engineering (KSE)',
      year: 2024,
      ranking: 'Scopus'
    },
    {
      authors: 'Van-Vinh Le and Duc-Hanh Dang',
      title: 'An Approach to Composing Concerns for an Executable Unified Domain Model',
      conference: 'Int. Conf. Computing and Communication Technologies (RIVF)',
      year: 2024,
      ranking: 'Scopus'
    },
    {
      authors: 'Van-Vinh Le, Nghia-Trong Be, and Duc-Hanh Dang',
      title: 'On automatic generation of executable domain models for domain-driven design',
      conference: '15th Int. Conf. Knowledge and Systems Engineering (KSE)',
      year: 2023,
      ranking: 'Scopus'
    },
    {
      authors: 'Duc-Hieu Nguyen, Van-Vinh Le, Thi-Hanh Nguyen, and Duc-Hanh Dang',
      title: 'A Method to Ensure Compliance with Attribute and Role Based Access Control Policy for Executing BPMN Models',
      conference: 'Int. Conf. System Science and Engineering (ICSSE)',
      year: 2021,
      ranking: 'Scopus'
    },
    {
      authors: 'Thi-Hanh Nguyen and Duc-Hanh Dang',
      title: 'A Graph Analysis Based Approach for Specification-Driven Testing of Model Transformations',
      conference: '8th NAFOSTED Conf. Information and Computer Science (NICS)',
      year: 2021,
      ranking: 'Scopus'
    },
    {
      authors: 'Minh-Hue Chu and Duc-Hanh Dang',
      title: 'Automatic Extraction of Analysis Classes from Use Cases',
      conference: '12th Int. Conf. Knowledge and Systems Engineering (KSE)',
      year: 2020,
      ranking: 'Scopus'
    }
  ]

  const nationalPublications = [
    {
      authors: 'Van-Vinh Le, Nhat-Hoang Nguyen, Duc-Quyen Nguyen, and Duc-Hanh Dang',
      title: 'A Semantic Framework and Tool Support for Unified Executable Domain Models in UDML: A Case Study on the RBAC Concern',
      journal: 'VNU Journal of Science: Computer Science and Communication Engineering',
      volume: '42(1):79-114',
      year: 2026,
      ranking: 'Vietnam National Journal'
    },
    {
      authors: 'Duc-Hanh Dang',
      title: 'FRSL: A Domain Specific Language to Specify Functional Requirements',
      journal: 'VNU Journal of Science: Computer Science and Communication Engineering',
      volume: '39(1):87–106',
      year: 2023,
      ranking: 'Vietnam National Journal'
    },
    {
      authors: 'Thi-Hanh Nguyen and Duc-Hanh Dang',
      title: 'A Contract-Based Specification Method for Model Transformations',
      journal: 'VNU Journal of Science: Computer Science and Communication Engineering',
      volume: '39(1):1-22',
      year: 2023,
      ranking: 'Vietnam National Journal'
    },
    {
      authors: 'Ngoc-Khai Nguyen, Anh-Hoang Truong, and Duc-Hanh Dang',
      title: 'Estimate the memory bounds required by shared variables in software transactional memory programs',
      journal: 'VNU Journal of Science: Computer Science and Communication Engineering',
      volume: '37(2):1-19',
      year: 2021,
      ranking: 'Vietnam National Journal'
    },
    {
      authors: 'Duc-Hanh Dang and Martin Gogolla',
      title: 'An OCL-Based Framework for Model Transformations',
      journal: 'VNU Journal of Science: Computer Science and Communication Engineering',
      volume: '32(1):42–57',
      year: 2016,
      ranking: 'Vietnam National Journal'
    },
    {
      authors: 'Khoa-Hai Nguyen and Duc-Hanh Dang',
      title: 'RTL: A Tool for Precise Model Transformations',
      journal: 'Journal of Science and Technology',
      volume: '52(4A):230–239',
      year: 2014,
      ranking: 'Vietnam National Journal'
    },
    {
      authors: 'Chu Thị Minh Huệ, Đặng Đức Hạnh',
      title: 'Ngôn ngữ mô hình hóa chuyên biệt miền cho mô hình bảo mật RBAC',
      journal: 'Tạp chí Nghiên cứu KH&CN',
      volume: '16(11-2011):163-168',
      year: 2011,
      ranking: 'Vietnam National Journal'
    }
  ]

  const publications = {
    journals: journalArticles,
    conferences: conferenceProceedings,
    national: nationalPublications
  }

  return (
    <section id="publications" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 ${locale === "vi" ? "font-vietnamese-heading" : ""
              }`}
          >
            {t("title")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6 sm:mb-8" />

          <div className="flex gap-2 mb-6 sm:mb-8 border-b border-border overflow-x-auto">
            {[
              { id: 'journals', label: t('journals') },
              { id: 'conferences', label: t('conferences') },
              { id: 'national', label: t('national') }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-2 font-medium text-xs sm:text-sm transition-all duration-300 relative whitespace-nowrap ${activeTab === tab.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-2 sm:space-y-3 max-h-96 overflow-y-auto pr-2 sm:pr-4">
            {publications[activeTab as keyof typeof publications].map((pub: any, index: number) => (
              <div
                key={index}
                className="group p-3 sm:p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">{pub.authors}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">{pub.title}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 items-center text-xs">
                  <span className="font-medium text-primary line-clamp-1">{pub.journal || pub.conference}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{pub.year}</span>
                  {(pub.impact || pub.ranking) && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span className="bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 rounded text-xs line-clamp-1">
                        {pub.impact || pub.ranking}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border text-center">
            <p className="text-muted-foreground text-xs sm:text-sm">
              Our lab has published over 40 research papers in prestigious international journals and conferences including SCIE-indexed journals with high impact factors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
