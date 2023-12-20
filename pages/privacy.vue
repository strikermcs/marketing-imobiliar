<script setup lang="ts">
const contacts = useContactsStore()

const { additionalInfo } = storeToRefs(contacts)
</script>

<template>
    <main class="page">
        <section class="content">
            <div class="solution__container">
                <h2 class="solution__title title">
					<span>Politica noastră de confidențialitate</span>
					<span class="title__bg">
						confidențialitate
					</span>
				</h2>
                <div class="advantages__text">
					<p>
						Bine ai venit  pe site-ul nostru! Ne luăm angajamentul să protejăm confidențialitatea datelor tale. Te rugăm să citești cu atenție politica noastră de confidențialitate.
					</p>
				</div>
                <ol class="solution__items">
                    <li class="cookiepolicy-item">
                        Informații colectate
                        <p>
                            Colectăm informațiile pe care ni le furnizezi în mod voluntar, cum ar fi <b>numele, adresa de e-mail, numărul de telefon.</b>
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Scopul colectării datelor
                        <p>
                            Folosim datele tale personale pentru a-ți oferi detalii despre scopul și serviciile noastre de marketing. 
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Link-uri către alte site-uri
                        <p>
                            Site-ul nostru poate conține link-uri către alte site-uri. Te rugăm să citești și politica lor de confidențialitate, deoarece sunt diferite.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Modificări ale politicii de confidențialitate
                        <p>
                            Ne rezervăm dreptul de a modifica această politică de confidențialitate. Orice modificare va putea fi găsită pe site, iar utilizarea după modificări înseamnă acceptarea acestora.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Drepturile tale
                        <p>
                            Ai dreptul să accesezi, să modifici, să ștergi sau să refuzinprelucrarea datelor personale.De asemene poți cere o copie a informațiilor personale pe care le deținem.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Consimțământul
                        <p>
                            Prin utilizarea site-ului nostru, îți exprimi consimțământul referitor la colectarea și prelucrarea datelor tale personale în conformitate cu această politică.
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Alte informații 
                        <p>
                            Pentru informații suplimentare cu privire la prelucrarea datelor tale personale, ne poți contacta folosind datele de contact de pe site.
                        </p>
                    </li>
                </ol>
                <div class="content-text">
                    Îți mulțumim că ai ales să folosești serviciile noastre!
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