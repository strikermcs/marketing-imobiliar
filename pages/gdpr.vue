<script setup lang="ts">
const contacts = useContactsStore()

const { additionalInfo } = storeToRefs(contacts)
</script>

<template>
    <main class="page">
        <section class="content">
            <div class="solution__container">
                <h2 class="solution__title title">
					<span>Politica de conformitate cu regulamentul GDPR</span>
					<span class="title__bg">
						GDPR
					</span>
				</h2>
                <ol class="solution__items">
                    <li class="cookiepolicy-item">
                        Scopul politicii GDPR 
                        <p>
                            De a informa utilizatorii cu privire la modul în care colectăm, utilizăm și protejăm datele personale în conformitate cu Regulamentul (GDPR).
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Datele personale
                        <p>
                            Colectăm și prelucrăm date personale folositoare pentru serviciile noastre, cum ar fi <b>nume, adrese personale, e-mail, numere de telefon.</b>
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Consimțământ și drepturile utilizatorilor
                        <p>
                            Prin furnizarea datelor personale, utilizatorii confirmă că au luat cunoștință politica și sunt de acord cu prelucrarea datelor lor. Ei au dreptul de a accesa, modifica sau șterge datele lor, precum și de a se opune prelucrării acestora. 
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Securitatea datelor
                        <p>
                            Folosim măsuri împotriva accesului neautorizat, pierderii sau distrugerii datelor personale și asigurăm totodată un mediu sigur de stocare și prelucrare a datelor.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Păstrarea datelor
                        <p>
                            Păstrăm datele doar atât cât este necesar pentru scopurile noastre. După îndeplinirea scopului, datele vor fi șterse/anonimizate.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Modificări ale politicii
                        <p>
                            Ne rezervăm dreptul de a modifica această politică. Orice modificare va fi comunicată pe site-ul nostru și va intra în vigoare la data publicării.
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
                    Prin utilizarea serviciilor noastre, utilizatorii confirmă că au citit și au înțeles Politica GDPR și își exprimă consimțământul cu privire la prelucrarea datelor lor personale.
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