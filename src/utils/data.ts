import {
  RiHomeLine,
  RiNodeTree,
  RiHistoryFill,
  RiGroupLine,
  RiUserLine,
  RiFocus2Line,
  RiReactjsFill,
  RiAndroidLine,
  RiSeoLine,
  RiFacebookCircleLine,
  RiContactsBookLine,
} from 'react-icons/ri';
import { IconType } from 'react-icons';
export interface navigation {
  label: string;
  url: string;
  icon: IconType;
  submenu?: navigation[];
}
type TreeData = Array<navigation>;

export const accordionData: Array<[string, string]> = [
  [
    'What is the purpose of this FAQ section?',
    `The purpose of this FAQ section is to address common queries and provide helpful answers to our users' questions regarding our product/service.`,
  ],
  [
    `How do I get started with [Product/Service Name]?`,
    `Getting started is easy! Simply [provide step-by-step instructions or link to a getting started guide].`,
  ],
  [
    `What features does [Product/Service Name] offer?`,
    `[Product/Service Name] offers a range of features including [list key features or link to a features page].`,
  ],
  [
    `Is there a free trial available?`,
    `Yes, we offer a free trial for [X] days. You can sign up for the free trial [provide a link to the sign-up page].`,
  ],
  [
    `How do I upgrade my account?`,
    `To upgrade your account, log in to your account dashboard and navigate to the subscription or billing section. From there, you can select the desired plan and follow the prompts to complete the upgrade process.`,
  ],
  [
    `What payment methods do you accept?`,
    `We accept payments via credit/debit card, PayPal, and other secure payment gateways.`,
  ],
  [
    `Can I cancel my subscription?`,
    `Yes, you can cancel your subscription at any time. Simply log in to your account, go to the subscription or billing section, and follow the prompts to cancel.`,
  ],
  [
    `How can I contact customer support?`,
    `You can reach our customer support team via [email/phone/live chat], [provide contact details], or visit our support page [link to support page].`,
  ],
  [
    `Is my data secure with [Product/Service Name]?`,
    `Yes, we take the security of your data very seriously. We use industry-standard encryption and security protocols to safeguard your information.`,
  ],
  [
    `Do you offer customization options?`,
    `Yes, we offer customization options for [describe customization options, e.g., branding, integration, etc.]. Please contact our sales team for more information.`,
  ],
  [
    `Can I use [Product/Service Name] on mobile devices?`,
    `Yes, [Product/Service Name] is compatible with mobile devices. We offer mobile apps for [iOS/Android], which you can download from [App Store/Google Play].`,
  ],
  [
    `How often do you release updates?`,
    `We strive to continuously improve our product/service, and updates are released regularly. You can expect updates [monthly/quarterly/etc.], including new features, enhancements, and bug fixes.`,
  ],
  [
    `Do you offer discounts for non-profits or educational institutions?`,
    `Yes, we offer discounts for non-profits and educational institutions. Please contact our sales team to learn more about our special pricing options.`,
  ],
  [
    `Can I request a feature or suggest an improvement?`,
    `Absolutely! We welcome feedback from our users. You can submit feature requests or suggestions through [provide a link to the feedback/suggestion form or contact page].`,
  ],
  [
    `Is there a user community or forum where I can interact with other users?`,
    `Yes, we have a user community/forum where you can interact with other users, ask questions, share tips, and more. You can join the community [provide a link to the community/forum].`,
  ],
];
export const imageData: Array<string> = [
  'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1610809027249-86c649feacd5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1599137258505-8871bd07cbbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1592450620607-efefef574bd0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
export const treeData: TreeData = [
  {
    label: 'Home',
    url: '/',
    icon: RiHomeLine,
  },
  {
    label: 'About',
    url: '/about',
    icon: RiNodeTree,
    submenu: [
      {
        label: 'Company',
        url: '/about/company',
        icon: RiNodeTree,
        submenu: [
          {
            label: 'History',
            url: '/about/company/history',
            icon: RiHistoryFill,
          },
          {
            label: 'Team',
            url: '/about/company/team',
            icon: RiNodeTree,
            submenu: [
              {
                label: 'Management',
                url: '/about/company/team/management',
                icon: RiGroupLine,
              },
              {
                label: 'Employees',
                url: '/about/company/team/employees',
                icon: RiUserLine,
              },
            ],
          },
        ],
      },
      {
        label: 'Mission',
        url: '/about/mission',
        icon: RiFocus2Line,
      },
    ],
  },
  {
    label: 'Services',
    url: '/services',
    icon: RiNodeTree,
    submenu: [
      {
        label: 'Web Design',
        url: '/services/web',
        icon: RiReactjsFill,
      },
      {
        label: 'Mobile App Development',
        url: '/services/mobile',
        icon: RiAndroidLine,
      },
      {
        label: 'Digital Marketing',
        url: '/services/marketing',
        icon: RiNodeTree,
        submenu: [
          {
            label: 'SEO',
            url: '/services/marketing/seo',
            icon: RiSeoLine,
          },
          {
            label: 'Social Media Marketing',
            url: '/services/marketing/social-media',
            icon: RiFacebookCircleLine,
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    url: '/contact',
    icon: RiContactsBookLine,
  },
];
export const tabData: Array<{ title: string; content: string }> = [
  {
    title: 'The Hobbit',
    content: `Bilbo Baggins, a timid hobbit, embarks on an unexpected adventure with a band of dwarves to reclaim their lost treasure. This magical tale captures themes of friendship, courage, and the importance of leaving one's comfort zone.`,
  },
  {
    title: 'Fahrenheit 451',
    content: `In a future where books are banned and burned, fireman Montag starts questioning society and risks everything to preserve knowledge by memorizing banned literature.`,
  },
  {
    title: 'The Metamorphosis',
    content: `Gregor Samsa wakes up one morning transformed into a giant insect. This Kafka story explores alienation, isolation, and the dehumanizing effects of societal expectations.`,
  },
];
