  
type HeadData = ({
  favicon: () => null | HTMLLinkElement,
}) 

export const HeadData:HeadData = ({
  favicon(){
    var shortcut = document.head.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement ?? null
    var icon = document.head.querySelector('link[rel="icon"]') as HTMLLinkElement ?? null
      if(shortcut) return shortcut
      else if(icon) return icon
      else return null
  }
})