document.addEventListener('DOMContentLoaded', function() {
    let db = new DB('https://highscore-global.firebaseio.com/')

    let params = new URLSearchParams(window.location.search)

    let url = '/' + params.get('corpo') + '/'
    // Printing the path on firebase on the console
    console.log(url)

    db.download(url, function(data) {
        // Printing the data contained on that path on firebase
        console.log(data)
        if (params.get('corpo') == 'Corpo Menu'){
            let sobre = document.querySelector('.child3 p')
            sobre.innerHTML = data['conteudo1']

            let avaliacao = document.querySelector('.child4 p')
            avaliacao.innerHTML = data['conteudo2']

            let docente = document.querySelector('.child5 p')
            docente.innerHTML = data['conteudo3']
        }

        else{
          let materia = document.querySelector('.hA')
          materia.innerHTML = data['Nome']

          let projeto = document.querySelector('.h2')
          projeto.innerHTML = data['SubNome']

          document.getElementById("img1").src = data["img1"]

          let objetivo = document.querySelector('.section1 .p')
          objetivo.innerHTML = data['corpo1']

          let recursos = document.querySelector('.section2 .p')
          recursos.innerHTML = data['corpo2']

          let Planejamento1 = document.querySelector('#plan1')
          Planejamento1.innerHTML = data['subcorpo1']['0']

          let Andamento = document.querySelector('#anda')
          Andamento.innerHTML = data['subcorpo2']

          let Conclusão = document.querySelector('#concl')
          Conclusão.innerHTML = data['subcorpo3']

          let Feedback = document.querySelector('.section4 .p')
          Feedback.innerHTML = data['corpo6']


        }


    })
})
