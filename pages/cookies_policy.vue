<script setup lang="ts">
const contacts = useContactsStore()

const { additionalInfo } = storeToRefs(contacts)
</script>

<template>
    <main class="page">
        <section class="content">
            <div class="cookiepolicy__container">
                <h2 class="cookiepolicy__title title">
					<span>Politica de Cookies</span>
					<span class="title__bg">
						Politica
					</span>
				</h2>
                <div class="advantages__text">
					<p>
						Salut! Bine ai venit pe pagina Marketing Imobiliar! Această politică de cookie-uri oferă informații esențiale despre modul în care utilizăm și de ce utilizăm cookie-uri pe site-ul nostru.
					</p>
				</div>
                <ol class="cookiepolicy__items">
                    <li class="cookiepolicy-item">
                        Ce sunt Cookie-urile?
                        <p>
                            Cookie-urile sunt fișiere de mici dimensiuni stocate pe dispozitivele noastre în momentul în care vizităm un site web. Acestea au diferite scopuri, cum ar fi îmbunătățirea funcționalității site-ului, analizarea traficului pe site, personalizarea experienței. 
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        Tipurile de Cookie-uri pe care le utilizăm:
                       <ol type="a">
                            <li>
                                Cookie-uri Esențiale:
                                <ul>
                                    <li>
                                        necesare pentru buna funcționare a site-ului (cookie-uri de sesiune, cookie-uri de autentificare)
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Cookie-uri de Analiză:
                                <ul>
                                    <li>
                                        păstrează informații despre modul în care vizitatorii utilizează site-ul nostru
                                    </li>
                                    <li>
                                        îmbunătățesc performanța site-ului
                                    </li>
                                </ul>
                            </li>
                       </ol>
                    </li>
                    <li class="cookiepolicy-item">
                        Administrarea Cookie-urilor:
                        <p>
                            Puteți controla/șterge cookie-urile
                        </p>
                    </li>
                    <li class="cookiepolicy-item">
                        De ce folosim Cookie-uri:
                        <ul>
                            <li>
                                Cookie-urile ajută la memorarea preferințelor și creează o experiență personalizată.
                            </li>
                            <li>
                                Cookie-urile esențiale asigură buna funcționare a site-ului.
                            </li>
                            <li>
                                Cookie-urile ajută la perceperea modului în care utilizatorii folosesc site-ul nostru.
                            </li>
                            <li>
                                Cookie-urile susțin de asemenea creșterea publicității site-ului. 
                            </li>
                        </ul>
                    </li>
                    <li class="cookiepolicy-item">
                        Actualizări ale acestei politici:
                        <ul>
                            <li>
                                Putem actualiza această politică de cookie-uri periodic.
                            </li>
                            <li>
                                Verificați pagina în mod regulat pentru orice actualizări.
                            </li>
                        </ul>
                    </li>
                    <li class="cookiepolicy-item">
                        Contactați-ne:
                        <p>
                            Dacă aveți întrebări cu privire la politica noastră de cookie-uri, nu ezitați să ne contactați la <a :href="`mailto:${additionalInfo?.email}`">{{additionalInfo?.email}}</a>
                        </p>
                    </li>
                </ol>
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