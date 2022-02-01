# ylis-suodatin.user.js

<img src="https://user-images.githubusercontent.com/92017896/152048529-de0ac56f-2224-484b-948c-aedf04058053.png" />

## mikä tämä on?

Ylilauta-sivustolle tarkoitettu "userscript".

## mitä tämä tekee?

Lisää sivulle seuraavat toiminnot:

- Näytä langan vastauksista vain AP:n vastaukset
- Näytä langan vastauksista vain ne, joissa on kuva tai video -upote
- Näytä langan vastauksista vain ne, joissa on urli
- Järjestä langan vastaukset tää-äänien määrän perusteella suurimmasta
  pienimpään, tai päinvastoin

## miten asennan tämän?

1. Asenna selaimeen Tampermonkey tai muu laajennus, jolla voi ajaa userscript
   -koodeja.

2. Avaa selaimella
   https://testuser3158.github.io/ylis-suodatin/ylis-suodatin.user.js. Skriptin
   pitäisi aueta Tampermonkeyssa.

   tai,

   Jos pelottaa asentaa tuntematon minifioitu skripti, pystytä kehitysympäristö,
   ihmettele koodia, käännä skripti (`yarn build`) ja raahaa
   `dist/ylis-suodatin.user.js` selaimeen.

## miten pystytän kehitysympäristön?

1. Asenna riittävän tuore Node.js sekä yarn.
2. Asenna Tampermonkey selaimeen.
3. Chrome: Kytke Tampermonkeyn asetuksissa `Allow access to file URLs` asetus
   päälle.
4. Aja
   `git clone git@github.com:testuser3158/ylis-suodatin.git && cd ylis-suodatin`.
5. Aja `yarn install`.
6. Aja `yarn dev` ja pidä prosessi päällä.
7. Avaa selaimella osoite http://localhost:8080/ylis-suodatin.proxy.user.js.
   Skriptin pitäisi aueta Tampermonkeyssa. Tämä asentaa skriptistä version, joka
   ajaa jokaisella sivunlatauksella uusimman version tehtyjen muutosten jälkeen.
