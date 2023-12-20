<script setup lang="ts">
const contacts = useContactsStore()

const { additionalInfo } = storeToRefs(contacts)
</script>

<template>
    <main class="page">
        <section class="content">
            <div class="solution__container">
                <h2 class="solution__title title">
					<span>Termeni și Condiții</span>
					<span class="title__bg">
						Termeni 
					</span>
				</h2>
                <ol class="solution__items">
                    <li class="cookiepolicy-item">
                        Acceptarea termenilor și condițiilor
                        <p>
                            Prin accesarea și utilizarea acestui site, confirmi că ai citit, înțeles și ești de acord cu Termenii și Condiții noastre.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Informații personale
                        <p>
                            Prin utilizare, ești de acord cu colectarea și prelucrarea informațiilor tale personale conform Politicii de Confidențialitate.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Responsabilitatea utilizatorului
                        <p>
                            Utilizatorii sunt responsabili pentru informațiile furnizate.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Drepturi de proprietate intelectuală
                        <p>
                            Conținutul site-ului, texte, imagini, grafice și mărcile înregistrate, sunt protejate de drepturile de proprietate intelectuală. Folosirea lor neautorizată este strict interzisă.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Modificări ale Termenilor și Condiții
                        <p>
                            Ne rezervăm dreptul de a modifica Termenii și Condițiile, iar orice modificare va fi publicată pe site și va intra în vigoare la data publicării. 
                        </p>
                        <p>Utilizarea site-ului după modificări înseamnă acceptarea lor.</p>
                    </li>
                    <li class="cookiepolicy-item">
                        Încetarea serviciilor
                        <p>
                            Ne rezervăm dreptul de a înceta furnizarea serviciilor în ipoteza în care se încălcă Termenii și Condițiile.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Contact
                        <p>
                            Pentru întrebări referitoare la prelucrarea datelor personale, te rugăm să ne contactezi la adresa <a :href="`mailto:${additionalInfo?.email}`">{{additionalInfo?.email}}</a>
                        </p>
                    </li>
                </ol>
                <div class="content-text">
                    Prin utilizarea acestui site, confirmi că ești de acord și că vei respecta Termenii  și Condițiile
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