export default function TravelSite() {
  const cidades = [
    {
      nome: 'Roma',
      pais: 'Itália',
      imagem:
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop',
      descricao:
        'Roma é uma cidade histórica repleta de monumentos incríveis, culinária maravilhosa e muita cultura.',
      dicas: [
        'Visite o Coliseu logo cedo.',
        'Conheça o Vaticano e a Basílica de São Pedro.',
        'Experimente massas e gelatos tradicionais.'
      ],
      mapa:
        'https://www.google.com/maps?q=Roma+Italia&output=embed'
    },
    {
      nome: 'Paris',
      pais: 'França',
      imagem:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
      descricao:
        'Paris encanta com seus cafés, museus, monumentos e clima romântico.',
      dicas: [
        'Suba na Torre Eiffel ao entardecer.',
        'Passeie pelo Rio Sena.',
        'Visite o Museu do Louvre.'
      ],
      mapa:
        'https://www.google.com/maps?q=Paris+Franca&output=embed'
    },
    {
      nome: 'Siena',
      pais: 'Itália',
      imagem:
        'https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=1200&auto=format&fit=crop',
      descricao:
        'Siena é uma charmosa cidade medieval localizada na região da Toscana.',
      dicas: [
        'Conheça a Piazza del Campo.',
        'Faça passeio pelas vinícolas de Chianti.',
        'Experimente vinhos locais e culinária toscana.'
      ],
      mapa:
        'https://www.google.com/maps?q=Siena+Italia&output=embed'
    }
  ]

  const cidadeInicial = cidades[0]

  const selecionarCidade = (cidade) => {
    document.getElementById('titulo').innerText = cidade.nome
    document.getElementById('subtitulo').innerText = cidade.pais
    document.getElementById('imagem').src = cidade.imagem
    document.getElementById('descricao').innerText = cidade.descricao

    const lista = document.getElementById('dicas')
    lista.innerHTML = ''

    cidade.dicas.forEach((dica) => {
      const item = document.createElement('li')
      item.innerText = dica
      lista.appendChild(item)
    })

    document.getElementById('mapa').src = cidade.mapa
  }

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      <aside className="w-72 bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-8">O Mundo Que Vi</h1>

        <div className="space-y-3">
          {cidades.map((cidade) => (
            <button
              key={cidade.nome}
              onClick={() => selecionarCidade(cidade)}
              className="w-full text-left bg-gray-800 hover:bg-gray-700 transition p-4 rounded-2xl"
            >
              <div className="font-semibold text-lg">{cidade.nome}</div>
              <div className="text-sm text-gray-300">{cidade.pais}</div>
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            id="imagem"
            src={cidadeInicial.imagem}
            alt="Cidade"
            className="w-full h-[420px] object-cover"
          />

          <div className="p-8">
            <h2 id="titulo" className="text-4xl font-bold text-gray-900 mb-2">
              {cidadeInicial.nome}
            </h2>

            <p id="subtitulo" className="text-xl text-gray-500 mb-6">
              {cidadeInicial.pais}
            </p>

            <p id="descricao" className="text-lg text-gray-700 leading-relaxed mb-8">
              {cidadeInicial.descricao}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Dicas de Viagem</h3>

              <ul id="dicas" className="list-disc pl-6 text-gray-700 space-y-2">
                {cidadeInicial.dicas.map((dica) => (
                  <li key={dica}>{dica}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Mapa</h3>

              <iframe
                id="mapa"
                src={cidadeInicial.mapa}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
