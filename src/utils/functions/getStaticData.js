export function getPaths(data, key) {
   const paths = data.map((item) => ({
      params: { [key]: item.id.toString() },
   }));

   return { paths, fallback: false };
}

export function getProps(data, key, params) {
   const item = data[params[key]];
   return { props: { data: item || null } };
}
