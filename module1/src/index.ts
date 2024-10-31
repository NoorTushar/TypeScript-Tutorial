{
   const searchName = (value: string | null): string => {
      return value ? "Searching" : "Nothing to Search";
   };
   console.log(searchName("Tushar")); // output: "Searching"
   console.log(searchName(null)); // output: "Nothing to Search"
}
