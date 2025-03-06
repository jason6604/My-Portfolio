import spacebubble from '../assets/spacebubble.png'
import stockcrawler from '../assets/stockcrawler.png'
import youtuberepeat from '../assets/youtuberepeat.png'
import autotabsopener from '../assets/autotabsopener.png'
import spacebubbledemo from '../assets/SpaceBubble-Demo.mp4'
import youtuberepeatdemo from '../assets/YouTubeRepeat-Demo.mp4'
import autotabsopenerdemo from '../assets/AutoTabsOpener.mp4'

export const translations = {
    en: {
      Navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      home: {
        name: "Tsai Chia-Han ",
        alphabetic:"",
        jobTitle: "Tech Lead - Software Developer",
        description: "Problem Solver / Team Player / Quick Learner",
        buttons: {
          viewWork: "View My Work",
          contact: "Contact Me",
        },
      },
      about: {
        aboutText: "<h2>About Me</h2><p>Skilled Full Stack Software Engineer with 10 years of experience.<br/>Passionate about providing high-quality and elegant solutions.<br/>Strong knowledge in front-end and back-end development. <br/>Ability to adapt to using different frameworks, programming languages and tools.<br/>Dedicate in requirement analysis, development and troubleshooting,<br/>also pay great attention to team communication and cooperation.</p><div className='about-buttons'></div>",
        button: {
          downloadCV: "Download CV",
        },
        stats: [
          { number: '10+', text: 'Years Experience' },
          { number: '30+', text: 'Projects Completed' },
          { number: '8+', text: 'Achievements & Certificates' }
        ],
        workExperience: [
          {years: '2020 - PRECENT', company:'LYC | Hitachi Solution', jobtitle: 'Technical Lead', jobsummary:'Dynamic 365 CE', location:['Japan']},
          {years: '2019', company:'Titansoft', jobtitle: 'Technical Consultant', jobsummary:'API Integration', location:['Taiwan']},
          {years: '2017 - 2018', company:'JU CO ENTERPRISE', jobtitle: 'Product Manager', jobsummary:'Online Store', location:['Taiwan','China']},
          {years: '2014 - 2017', company:'aEnrich Technology', jobtitle: 'Senior SE/SA', jobsummary:'eHRD | KPI System', location:['Taiwan']},
        ],
        expertises: {
          title: "Expertises",
          data:
          [
            { 
              Category: 'Domain Knowledge',
              Items: ['Dynamics 365', 'KPI System', 'eHRD', 'Payment System']
            },
            { 
              Category: 'Dev Konwledge',
              Items: ['Web Dev', 'Front-End Dev', 'Back-End Dev', 'API Intergration', 'Database']
            },
            { 
              Category: 'Language & DB',
              Items: ['JavaScript', 'TypeScript','Html & CSS', 'C#', 'MSSQL', 'MySQL']
            },
            { 
              Category: 'Tools',
              Items: ['Visual Studio', 'VS Code', 'DevOps', 'Git', 'Powershell', 'Playwright']
            }
          ]
        }
      },
      skills: {
        title: "Skills Overview",
        description: "A comprehensive overview of my technical expertise and proficiency levels",
        skillCategories: [
          {
            category: "Domain",
            skills: [
              { name: "Dynamics 365", level: 90 },
              { name: "API Integration", level: 85 },
              { name: "KPI System", level: 85 },
              { name: "eHRD", level: 80 },
              { name: "Scrum", level: 80 }
            ]
          },
          {
            category: "Development",
            skills: [
              { name: "JavaScript | TypeScript", level: 90 },
              { name: "React.js", level: 75 },
              { name: "Html & CSS", level: 80 },
              { name: "C#", level: 90 },
              { name: "VB", level: 80 },
              { name: "RDL", level: 90 },
              { name: "SSIS", level: 85 },
              { name: "MySQL", level: 80 }
            ]
          },
          {
            category: "Tools",
            skills: [
              { name: "Visual Studio", level: 90 },
              { name: "VS Code", level: 90 },
              { name: "DevOps", level: 90 },
              { name: "Git", level: 85 },
              { name: "PowerShell", level: 80 },
              { name: "Playwright", level: 75 }
            ]
          },
          {
            category: "Languages",
            skills: [
              { name: "Chinese", level: 100 },
              { name: "English", level: 85 },
              { name: "Japanese", level: 70 }
            ]
          }
        ],
        addTitle: "Additional Skills",
        additionalSkills: [
          "Python",
          "Java",
          "Android App",
          "Eclipse",
          "Cloudfare",
          "Web Performance", 
          "Automation Testing",
          "Agile Methodology",
          "Problem Solving",
          "Team Collaboration"
        ]      
      },
      portfolio: {
        title: "Portfolio",
        description: "Recent Works",
        projects: [
          {
            id: 1,
            title: 'Space Bubble',
            description: 'Javascript Game Design',
            image: spacebubble,
            link: spacebubbledemo
          },
          {
            id: 2,
            title: 'Stock Fetcher',
            description: 'Python Web Crawler',
            image: stockcrawler,
            link: stockcrawler
          },
          {
            id: 3,
            title: 'YouTube Replay Tool',
            description: 'React Web Tool',
            image: youtuberepeat,
            link: youtuberepeatdemo
          },
          {
            id: 4,
            title: 'Auto Tabs Opener',
            description: 'Browser Extension',
            image: autotabsopener,
            link: autotabsopenerdemo
          }
        ],
        viewProject: "View Project"
      },
      contact: {
        title: "<h2>Get <strong>In Touch</strong></h2>",
        contactDetails: {
          title: "My Contact Details",
          infoData: [
            { icon: "fas fa-map-marker-alt", title: "Location", text: "Tokyo, Japan" },
            { icon: "fas fa-envelope", title: "Email", text: "jasontsai6604@gmail.com" }
          ]
        },
        messageInput: {
          placeholder: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject", 
            message: "Message"
          },
          button: {
            send:  "Send Message",
            sending: "Sending...",
            sent: "Message Sent",
          }
        },
        messageSent: {
          success: "Message sent successfully! I will get back to you soon.",
          error: "Failed to send message. Please try again."
        }
      },
      footer: {
        title: "Footer",
        // Add more translations
      }
    },
    jp: {
      Navbar: {
        home: "ホーム",
        about: "個人情報",
        skills: "スキル",
        portfolio: "ポートフォリオ",
        contact: "コンタクト",
      },
      home: {
        name: "蔡 佳翰 ",
        alphabetic:"サイ　チャハン",
        jobTitle: "技術リーダー - ソフトウェア開発者",
        description: "Problem Solver / Team Player / Quick Learner",
        buttons: {
          viewWork: "作品",
          contact: "コンタクト",
        },
      },
      about: {
        aboutText: "<h2>プロフィール</h2><p>10 年の経験を持つ熟練したフルスタック ソフトウェア エンジニアです。<br/>高品質のソリューションを提供することに熱意を持っています。</br>フロントエンドとバックエンドの開発に関する深い理解と、さまざまなフレームワークの使用に適応する能力を持っています。<br/>要件分析、開発、トラブルシューティングに専念し、チームのコミュニケーションとコラボレーションをとても重視しています。</p><div className='about-buttons'></div>",
        button: {
          downloadCV: "履歴書ダウンロード",
        },
        stats: [
          { number: '10+', text: '経験年数' },
          { number: '30+', text: '参加プロジェクト' },
          { number: '8+', text: '実績と認証' }
        ],
        workExperience: [
          {years: '2020 - 現在', company:'LYC | 日立ソリューションズ', jobtitle: '技術リーダー', jobsummary:'Dynamic 365 CE', location:['Japan']},
          {years: '2019', company:'Titansoft', jobtitle: '技術コンサルタント', jobsummary:'API Integration', location:['Taiwan']},
          {years: '2017 - 2018', company:'JU CO ENTERPRISE', jobtitle: 'プロダクトマネージャー', jobsummary:'Online Store', location:['Taiwan','China']},
          {years: '2014 - 2017', company:'aEnrich Technology', jobtitle: 'Senior SE/SA', jobsummary:'eHRD | KPI System', location:['Taiwan']},
        ],
        expertises: {
          title: "専門スキル",
          data:
          [
            { 
              Category: 'ドメイン知識',
              Items: ['Dynamics 365', 'KPI System', 'eHRD', 'Payment System']
            },
            { 
              Category: '開発知識',
              Items: ['Web Dev', 'Front-End Dev', 'Back-End Dev', 'API Intergration', 'Database']
            },
            { 
              Category: 'プログラミング言語 ＆ DB',
              Items: ['JavaScript', 'TypeScript','Html & CSS', 'C#', 'MSSQL', 'MySQL']
            },
            { 
              Category: '開発ツール',
              Items: ['Visual Studio', 'VS Code', 'DevOps', 'Git', 'Powershell', 'Playwright']
            }
          ]
        }
      },
      skills: {
        title: "スキル概要",
        description: "技術的専門知識と熟練度の概要",
        skillCategories: [
          {
            category: "ドメイン",
            skills: [
              { name: "Dynamics 365", level: 90 },
              { name: "API Integration", level: 85 },    
              { name: "KPI System", level: 85 },
              { name: "eHRD", level: 80 },
              { name: "Scrum", level: 80 }
            ]
          },
          {
            category: "開発について",
            skills: [              
              { name: "JavaScript | TypeScript", level: 90 },
              { name: "React.js", level: 75 },
              { name: "Html & CSS", level: 80 },
              { name: "C#", level: 90 },
              { name: "VB", level: 80 },
              { name: "RDL", level: 90 },
              { name: "SSIS", level: 85 },
              { name: "MySQL", level: 80 }
            ]
          },
          {
            category: "ツール",
            skills: [
              { name: "Visual Studio", level: 90 },
              { name: "VS Code", level: 90 },
              { name: "DevOps", level: 90 },
              { name: "Git", level: 85 },
              { name: "PowerShell", level: 80 },
              { name: "Playwright", level: 75 }
            ]
          },
          {
            category: "言語",
            skills: [
              { name: "中国語", level: 100 },
              { name: "英語", level: 85 },
              { name: "日本語", level: 70 }
            ]
          }
        ],
        addTitle: "他のスキール",
        additionalSkills: [
          "Python",
          "Java",
          "Android App",
          "Eclipse",
          "Cloudfare",
          "Web Performance", 
          "Automation Testing",
          "Agile Methodology",
          "Problem Solving",
          "Team Collaboration"
        ]      
      },
      portfolio: {
        title: "作品",
        description: "最近の作品",
        projects: [
          {
            id: 1,
            title: 'スペースバブル',
            description: 'Javascript ゲームデザイン',
            image: spacebubble,
            link: spacebubbledemo
          },
          {
            id: 2,
            title: '株価データフェッチャー',
            description: 'Python ウェブクローラー',
            image: stockcrawler,
            link: stockcrawler
          },
          {
            id: 3,
            title: 'YouTube 再生ツール',
            description: 'React ウェブツール',
            image: youtuberepeat,
            link: youtuberepeatdemo
          },
          {
            id: 4,
            title: '自動タブオープナー',
            description: 'ブラウザ拡張機能',
            image: autotabsopener,
            link: autotabsopenerdemo
          }
          // Add more projects
        ],
        viewProject: "デモビデオ"
      },
      contact: {
        title: "<h2><strong>問い合わせ</strong></h2>",
        contactDetails: {
          title: "連絡先",
          infoData: [
            { icon: "fas fa-map-marker-alt", title: "位置", text: "東京、日本" },
            { icon: "fas fa-envelope", title: "メール", text: "jasontsai6604@gmail.com" }
          ]
        },
        messageInput: {
          placeholder: {
            name: "名前",
            email: "メールアドレス",
            subject: "主題", 
            message: "メッセージ"
          },
          button: {
            send:  "送信",
            sending: "送信中...",
            sent: "Message Sent",
          }
        },
        messageSent: {
          success: "メッセージは正常に送信されました。すぐに返信いたします。",
          error: "メッセージを送信できませんでした。もう一度お試しください。"
        }
      },
      footer: {
        title: "Footer",
        // Add more translations
      }
    },
    zh: {
      Navbar: {
        home: "首頁",
        about: "關於",
        skills: "技能",
        portfolio: "作品",
        contact: "聯絡方式",
      },
      home: {
        name: "蔡 佳翰 ",
        alphabetic:"",
        jobTitle: "Tech Lead - 資深軟體工程師",
        description: "Problem Solver / Team Player / Quick Learner",
        buttons: {
          viewWork: "我的作品",
          contact: "與我聯繫",
        },
      },
      about: {
        aboutText: "<h2>經歷簡述</h2><p>擁有10年經驗的資深軟體工程師<br/>致力於提供高品質與精緻的軟體工程解決方案<br/>10年的軟體開發職涯深耕於 前/後 端的全端開發<br/>致使能適應於不同的框架、程式語言與開發工具<br/>主要著力於需求分析、開發和故障排除<br/>也注重團隊的溝通與合作所帶來的工作成效</p><div className='about-buttons'></div>",
        button: {
          downloadCV: "履歷下載",
        },
        stats: [
          { number: '10+', text: '開發經驗' },
          { number: '30+', text: '完成專案' },
          { number: '8+', text: '成就與證照' }
        ],
        workExperience: [
          {years: '2020 - 在職中', company:'LYC | Hitachi Solution', jobtitle: 'Technical Lead', jobsummary:'Dynamic 365 CE', location:['Japan']},
          {years: '2019', company:'Titansoft', jobtitle: 'Technical Consultant', jobsummary:'API Integration', location:['Taiwan']},
          {years: '2017 - 2018', company:'鉅絖企業', jobtitle: 'Product Manager', jobsummary:'Online Store', location:['Taiwan','China']},
          {years: '2014 - 2017', company:'aEnrich Technology', jobtitle: 'Senior SE/SA', jobsummary:'eHRD | KPI System', location:['Taiwan']},
        ],
        expertises: {
          title: "專業技能",
          data:
          [
            { 
              Category: '專業知識',
              Items: ['Dynamics 365', 'KPI System', 'eHRD', 'Payment System']
            },
            { 
              Category: '開發領域',
              Items: ['Web Dev', 'Front-End Dev', 'Back-End Dev', 'API Intergration', 'Database']
            },
            { 
              Category: '程式語言 & 資料庫',
              Items: ['JavaScript', 'TypeScript','Html & CSS', 'C#', 'MSSQL', 'MySQL']
            },
            { 
              Category: '開發工具',
              Items: ['Visual Studio', 'VS Code', 'DevOps', 'Git', 'Powershell', 'Playwright']
            }
          ]
        }
      },
      skills: {
        title: "技術總攬",
        description: "全面概述我的技術專長和熟練程度",
        skillCategories: [
          {
            category: "專業知識",
            skills: [
              { name: "Dynamics 365", level: 90 }, 
              { name: "API Integration", level: 85 },   
              { name: "KPI System", level: 85 },
              { name: "eHRD", level: 80 },
              { name: "Scrum", level: 80 }
            ]
          },
          {
            category: "開發語言",
            skills: [              
              { name: "JavaScript | TypeScript", level: 90 },
              { name: "React.js", level: 75 },
              { name: "Html & CSS", level: 80 },
              { name: "C#", level: 90 },
              { name: "VB", level: 80 },
              { name: "RDL", level: 90 },
              { name: "SSIS", level: 85 },
              { name: "MySQL", level: 80 }
            ]
          },
          {
            category: "開發工具",
            skills: [
              { name: "Visual Studio", level: 90 },
              { name: "VS Code", level: 90 },
              { name: "DevOps", level: 90 },
              { name: "Git", level: 85 },
              { name: "PowerShell", level: 80 },
              { name: "Playwright", level: 75 }
            ]
          },
          {
            category: "語言能力",
            skills: [
              { name: "中文", level: 100 },
              { name: "英文", level: 85 },
              { name: "日文", level: 70 }
            ]
          }
        ],
        addTitle: "其他技能",
        additionalSkills: [
          "Python",
          "Java",
          "Android App",
          "Eclipse",
          "Cloudfare",
          "Web Performance", 
          "Automation Testing",
          "Agile Methodology",
          "Scrum",
          "Problem Solving",
          "Team Collaboration"
        ]      
      },
      portfolio: {
        title: "作品",
        description: "近期作品",
        projects: [
          {
            id: 1,
            title: '星際泡泡',
            description: 'Javascript遊戲設計',
            image: spacebubble,
            link: spacebubbledemo
          },
          {
            id: 2,
            title: '股票資訊擷取工具',
            description: 'Python網頁爬蟲工具',
            image: stockcrawler,
            link: stockcrawler
          },
          {
            id: 3,
            title: 'YouTube影片重播工具',
            description: 'React網頁工具',
            image: youtuberepeat,
            link: youtuberepeatdemo
          },
          {
            id: 4,
            title: '自動分頁開啟工具',
            description: '瀏覽器擴充元件',
            image: autotabsopener,
            link: autotabsopenerdemo
          }
          // Add more projects
        ],
        viewProject: "Demo影片"
      },
      contact: {
        title: "<h2><strong>與我聯繫</strong></h2>",
        contactDetails: {
          title: "聯絡資訊",
          infoData: [
            { icon: "fas fa-map-marker-alt", title: "位置", text: "日本，東京" },
            { icon: "fas fa-envelope", title: "Email", text: "jasontsai6604@gmail.com" }
          ]
        },
        messageInput: {
          placeholder: {
            name: "您的姓名",
            email: "您的信箱",
            subject: "主旨", 
            message: "訊息"
          },
          button: {
            send:  "送出",
            sending: "傳送中...",
            sent: "Message Sent",
          },
        },
        messageSent: {
          success: "訊息已成功送出，我會盡快回覆您",
          error: "訊息傳送失敗，請再試一次"
        }
      },
      footer: {
        title: "Footer",
        // Add more translations
      }
    }
  };