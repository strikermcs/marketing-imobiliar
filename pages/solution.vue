<script setup lang="ts">
const contacts = useContactsStore()

const { additionalInfo } = storeToRefs(contacts)
</script>

<template>
    <main class="page">
        <section class="content">
            <div class="solution__container">
                <h2 class="solution__title title">
					<span>Solutionarea litigiilor</span>
					<span class="title__bg">
						Solutionarea
					</span>
				</h2>
                <ol class="solution__items">
                    <li class="cookiepolicy-item">
                        Scopul 
                        <p>
                            acestei proceduri este de a furniza cel mai eficient mod de soluționare a litigiilor între utilizatori și site-ul nostru de marketing imobiliar.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Contact 
                        <p>
                            Utilizatorii care întâmpină probleme sunt sfătuiți să ne contacteze la <a :href="`mailto:${additionalInfo?.email}`">{{additionalInfo?.email}}</a>, pentru a putea rezolva neînțelegerile amiabil, simplu și rapid.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        SAL 
                        <p>
                            În cazul în care soluționarea prin contact nu este posibilă se poate recurge la soluționarea alternativă a litigiilor 
                        </p>
                        <p>
                            Detalii: <a href="https://anpc.ro/formular-sal-anpc/">https://anpc.ro/formular-sal-anpc/</a>
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Calea juridică 
                        <p>
                            În cazul în care variantele mai sus menționate nu vă oferă o soluționare satisfăcătoare, se recurge la calea juridică. Orice litigiu va fi supus instanței competente în conformitate cu legislația aplicabilă.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Modificări ale procedurii
                        <p>
                            Ne rezervăm dreptul de a modifica procedura de soluționare a litigiilor. Astfel, orice modificare va fi comunicată pe site-ului nostru și va intra în vigoare la data publicării sale.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Contact
                        <p>
                            Pentru orice întrebări sau solicitări referitoare la soluționarea litigiilor, vă rugăm să ne contactați la  <a :href="`mailto:${additionalInfo?.email}`">{{additionalInfo?.email}}</a>
                        </p>
                    </li>
                </ol>
                <div class="content-text">
                    Prin utilizarea serviciilor noastre, se acceptă și se respectă această procedură de soluționare a litigiilor în cazul unor neînțelegeri.
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.content {
    margin: 100px 0;
    padding: 0 10px;
}


.cookiepolicy-item {
    font-weight: 800;
    font-size: 18px;
    padding-bottom: 20px;
}

.solution__items {
    margin-top: 40px;
}

.cookiepolicy-item p,ol,ul{
    font-size: 16px;
    font-weight: normal;
    padding-top: 10px;
}

a {
    color: blue;
    text-decoration: underline;
}


</style>