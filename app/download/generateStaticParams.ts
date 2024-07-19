// interface Version {
//   version: string;
// }

// interface AppData {
//   versions: Version[];
// }

// export async function generateStaticParams() {
//   const res = await fetch("/bolohi2.json");
//   const data: AppData = await res.json();

//   return data.versions.map((version) => ({
//     params: { version: version.version },
//   }));
// }
