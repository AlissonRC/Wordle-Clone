export function palavraRandom(){

    const palavras =  
        `negro
        nobre
        afeto
        plena
        sutil
        ideia
        poder
        moral
        honra
        justo
        arroz
        limpo
        bolso
        expor
        amigo
        casal
        porra
        tempo
        pleno
        burro
        legal
        cesta
        calma
        vadia
        humor
        linda
        pobre
        toada
        velho
        ajuda
        ideal
        jovem
        ciclo
        papel
        corno
        campo
        reino
        grave
        molho
        porta
        agudo
        rubro
        crime
        letal
        folga
        poema
        broxa
        falha
        briga
        roupa
        busca
        cargo
        idoso
        fruto
        tarde
        tribo
        aviso
        chefe
        vento
        grama
        saldo
        nuvem
        beijo
        pedra
        manga
        bruto
        tchau
        inter
        odiar
        viado
        areia
        pomar
        aviar
        negar
        canto
        cinto
        rocha
        bolsa
        amada
        marca
        bunda
        jogar
        natal
        santo
        campa
        cerca
        volta
        velha
        mover
        letra
        matar
        nesta
        etapa
        sabor
        porca
        trago
        barro
        coroa
        calça
        sigla
        final
        louro
        firma
        arroz
        limpo
        bolso
        torna
        tumba
        queda
        lutar
        farol
        dança
        baixa
        folha
        fugiu
        ousar
        mimar
        corar
        veloz
        zumbi
        burra
        sinta
        longo
        salmo
        macho
        cacto
        vazia
        calor
        justa
        farto
        todas
        mania
        gueto
        chave
        lucro
        sugar
        repor
        merda
        sexto
        custo
        subir
        refil
        mimos
        lento
        usual
        cardo
        louca`

        const palavrasString = palavras.split('\n',100)
        const palavrasStringTrim: string[] = []
        
        palavrasString.map((palavra)=>
        {
            palavrasStringTrim.push(palavra.trim())
            
        })
        

        
        const palavra = palavrasStringTrim[Math.floor(Math.random() * 101)]
        return palavra

}