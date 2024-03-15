const channelsData = [
    
    
    { 
      id: "Ceylan",
      name: "Ceylan",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/vZmJnYBCPHs?autoplay=1&mute=1"


    },
    { 
        id: "İbrahim Tatlıses",
        name: "İbrahim Tatlıses",
        visibilidad: "",
        source: "https://www.youtube.com/embed/4DOMcjVNq-w?si=uK4glVvOqkN3fu4x"
    },
    { 
        id: "Gözleri Bela",
        name: "Gözleri Bela",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/1xn3nEvc5Oc?si=wJW3VXSoqTdO3oQx"
    },
    { 
        id: "Ceylan Ft. Alişan ",
        name: "Ceylan Ft. Alişan ",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/QkYBMuB6sco?si=T7esQMUYnoj-EcUH"
    },
    { 
        id: "Ceylan Ft. Alişan",
        name: "Ceylan Ft. Alişan",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/lzmjXDvK4EA?si=gkAUySMI7ZP3_l6t"
    },
    { 
        id: "Aşkından Yanayım Mı",
        name: "Aşkından Yanayım Mı",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/3WieehU8a8w?si=F9UsUVtZUA1TMlyf"
      },
      { 
        id: "Sen Affetsen Ben Affetmem",
        name: "Sen Affetsen Ben Affetmem",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/BTZp5qfSJNg?si=08hh9pEwpVTGWVpy"
      },
      { 
        id: "Birileri Kandırmış",
        name: "Birileri Kandırmış",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/aRbj2MzaCFA?autoplay=1&mute=1"
      },
      { 
        id: "Her Şeyim Oldun Benim",
        name: "Her Şeyim Oldun Benim",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/pF99jsq4I0k?autoplay=1&mute=1"
      },
      { 
          id: "Elimde Fotoğrafın",
          name: "Elimde Fotoğrafın",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/VTkoxK4n3kM?autoplay=1&mute=1"
        },


      { 
          id: "Kostak & Nolur Hey",
          name: "Kostak & Nolur Hey",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/3PCZFXU6n-M?autoplay=1&mute=1"
        },

    { 
      id: "Fatih Bulut - Yırtıl",
      name: "Fatih Bulut - Yırtıl",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/VXo-0yX2fcs?si=B1tlTgpKGylcdcn_"
    },



      {                 
        id: "Ben Ne Yangınlar Gördüm",
        name: "Ben Ne Yangınlar Gördüm",
        visibilidad: "",
        tipo: "video",
          source: "https://www.youtube.com/embed/INBFgDVUUj0?autoplay=1&mute=1"
      },/*
      { 
        id: "c9",
        name: "C9",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/c9?volume=0&mute=1"
      },
     /* { 
        id: "uatv",
        name: "UATV",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/uatv"
      },
      
      { 
        id: "itvpatagonia",
        name: "ITV Patagonia",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/k_O0QiiyIKU?autoplay=1&mute=1"
      },*/
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="channel-name"><h4>${channel.name}</h4><a target="_BLANK" href="${channel.source}"><span class="new-window">Turis Tv</span><img width="16px" src="assets/img/Icon material-open-in-new.svg"></a></div>
      </div>
    `;
  }
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  