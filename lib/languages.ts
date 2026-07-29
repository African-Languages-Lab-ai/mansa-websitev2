export type Language = {
  name: string;
  description: string;
  /** angular position around the globe, in degrees (0 = right, counter-clockwise) */
  angle: number;
  /** which side the label sits on, for text alignment */
  side: "left" | "right";
};

// Evenly distributed with one label at top-centre to avoid straddling collisions.
export const languages: Language[] = [
  { name: "Amharic", description: "Amharic is the official working language of Ethiopia, written in the Geʽez script and spoken by over 32 million people.", angle: 90, side: "right" },
  { name: "Ewe", description: "Ewe is a Gbe language spoken by around 7 million people across southeastern Ghana, Togo, and Benin.", angle: 78, side: "right" },
  { name: "Bemba", description: "Bemba is a Bantu language and one of the most widely spoken languages in Zambia, used by over 4 million people.", angle: 65, side: "right" },
  { name: "Arabic", description: "Arabic is spoken across North Africa and the wider Arab world by hundreds of millions, with rich regional dialects.", angle: 53, side: "right" },
  { name: "Yoruba", description: "Yoruba is spoken by over 45 million people, primarily in southwestern Nigeria, Benin, and Togo.", angle: 40, side: "right" },
  { name: "Bambara", description: "Bambara is the most widely spoken language in Mali, serving as a lingua franca for around 14 million people.", angle: 28, side: "right" },
  { name: "Hausa", description: "Hausa is a Chadic language spoken by over 80 million people across West Africa, especially Nigeria and Niger.", angle: 16, side: "right" },
  { name: "Chichewa", description: "Chichewa (Nyanja) is a national language of Malawi, also spoken in Zambia, Mozambique, and Zimbabwe.", angle: 3, side: "right" },
  { name: "Igbo", description: "Igbo is spoken by over 30 million people in southeastern Nigeria and is one of the country's major languages.", angle: -9, side: "right" },
  { name: "Zulu", description: "Zulu is the most widely spoken home language in South Africa, used by around 12 million first-language speakers.", angle: -22, side: "right" },
  { name: "Kikongo", description: "Kikongo is a Bantu language spoken across the Democratic Republic of the Congo, Republic of the Congo, and Angola.", angle: -34, side: "right" },
  { name: "Kinyarwanda", description: "Kinyarwanda is the national language of Rwanda, spoken by nearly the entire population of over 12 million.", angle: -47, side: "right" },
  { name: "Kirundi", description: "Kirundi is the national language of Burundi, closely related to Kinyarwanda and spoken by over 11 million people.", angle: -59, side: "right" },
  { name: "Lingala", description: "Lingala is a Bantu trade language spoken along the Congo River by tens of millions across Central Africa.", angle: -71, side: "right" },
  { name: "Shona", description: "Shona is the most widely spoken language in Zimbabwe, used by over 10 million people.", angle: -84, side: "right" },
  { name: "Afrikaans", description: "Afrikaans is spoken by around 7 million people in South Africa and Namibia, evolved from Dutch settlers.", angle: -96, side: "left" },
  { name: "Somali", description: "Somali is a Cushitic language spoken by over 20 million people in Somalia, Ethiopia, Djibouti, and Kenya.", angle: -109, side: "left" },
  { name: "Swahili", description: "Swahili is a lingua franca of East Africa spoken by over 100 million people across the region.", angle: -121, side: "left" },
  { name: "Luganda", description: "Luganda is the most widely spoken language in Uganda, used as a lingua franca in and around Kampala.", angle: -133, side: "left" },
  { name: "Xhosa", description: "Xhosa is a South African language famous for its click consonants, spoken by over 8 million people.", angle: -146, side: "left" },
  { name: "Swati", description: "Swati (siSwati) is the national language of Eswatini and an official language of South Africa.", angle: -158, side: "left" },
  { name: "Tigrinya", description: "Tigrinya is spoken in Eritrea and Ethiopia's Tigray region by around 9 million people, written in Geʽez script.", angle: -171, side: "left" },
  { name: "Sesotho", description: "Sesotho is a national language of Lesotho and an official language of South Africa, spoken by over 5 million people.", angle: 177, side: "left" },
  { name: "Ndebele (South)", description: "Southern Ndebele is an official language of South Africa, known for its distinctive geometric art traditions.", angle: 164, side: "left" },
  { name: "Sepedi", description: "Sepedi (Northern Sotho) is one of South Africa's eleven official languages, spoken by over 4 million people.", angle: 152, side: "left" },
  { name: "Oromo", description: "Oromo is a Cushitic language spoken by over 35 million people, primarily in Ethiopia and Kenya.", angle: 140, side: "left" },
  { name: "Twi", description: "Twi is a dialect of Akan spoken by millions in Ghana, one of the country's most common languages.", angle: 127, side: "left" },
  { name: "Tswana", description: "Tswana (Setswana) is the national language of Botswana and widely spoken in South Africa.", angle: 115, side: "left" },
  { name: "Tsonga", description: "Tsonga is a Bantu language spoken in South Africa, Mozambique, Zimbabwe, and Eswatini by several million people.", angle: 102, side: "left" },
];
