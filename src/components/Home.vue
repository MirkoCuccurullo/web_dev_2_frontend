<template>
  <section>
    <div class="row">
            <div class="col-centered">
                <div class="text-center" style=" width:100%; height: 350px;    background-image: url('https://picsum.photos/id/352/3264/2176');
    background-size: cover;">
                    <h1 class="fw-bald text-white">Brunswick</h1>
                    <p>
                    <h3 class="fw-light text-white">The law is equal for all</h3>
                    </p>
                </div>
            </div>
        </div>
      


    <div class="card" id="company_overview">
        <div class="card-body">
         <div class="card-header"><h4 class="text-white text-center" id="banner"> Overview of the company</h4></div>
            <div class="card-text">
                <p>Brunswick handles all types of litigation in state and federal courts throughout the United States. The firm is particularly recognized for its representation of plaintiffs in high-stakes commercial litigation, business law litigation, federal and state securities, intellectual property, trademark, false advertising, and insurance litigation, as well as its trial and appellate work in such civil matters as lease/lease finance, real estate, investment, insurance, consumer lending, finance and insurance, employment law, health care, environmental, insurance and environmental, transportation,warrant and repossession, and employment law.</p>
            </div>
        </div>
    </div>

    <div class="row ml-1">
        <h2 class="text-center"> Company top employees</h2>
        <div id="card1" class="card col-sm-6 col-md-4 col-8 col-xl-3 m-5">
            <div class="card-body text-center">
                <div class="card-header "> <h4> Albert Hopkins</h4></div>
                <div class="card-picture">
                    <img src="/php_images/images.jpeg" width="200" height="150">
                </div>
            </div>
        </div>
        <div id="card2" class="card col-md-4 col-sm-6 col-8 col-xl-3 m-5">
            <div class="card-body text-center">
                <div class="card-header "> <h4> Amalia Crooks</h4></div>
                <div class="card-picture">
                    <img src="/php_images/lawyer.jpg" width="200" height="150">
                </div>
            </div>
        </div>
        <div id="card3" class="card col-sm-6 col-md-4 col-8 col-xl-3 m-5">
            <div class="card-body text-center">
                <div class="card-header"> <h4> John Smith</h4></div>
                <div class="card-picture">
                    <img src="/php_images/law.jpg" width="200" height="150">
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5">

        <h2 class="text-center">  Customers Reviews</h2>

        <div  class="row">
            <div id="card4" class="card col-sm-6 col-md-4 col-8 col-xl-3 m-5" >
                <div class="card-body text-center">
                    <div class="card-picture">
                        <img src="https://picsum.photos/id/177/2515/1830" style="height: 175px; width: 100%;" alt="something went wrong">

                    </div>
                    <div class="card-text">
                        <p> "Best law Company ever!!" - Mirko </p>
                    </div>
                </div>
            </div>
            <div id="card5" class="card col-sm-6 col-md-4 col-8 col-xl-3 m-5" >
                <div class="card-body text-center">
                    <div class="card-picture">
                        <img src="https://picsum.photos/id/64/4326/2884" style="height: 175px; width: 100%;" alt="something went wrong">
                    </div>
                    <div class="card-text">
                        <p> "Solved my case in no time!" - Lucy </p>
                    </div>
                </div>
            </div>
            <div id="card6" class="card col-md-4 col-8 col-sm-6 col-xl-3 m-5" >
                <div class="card-body text-center">
                    <div class="card-picture">

                        <img src="https://picsum.photos/id/65/4912/3264" style="height: 175px; width: 100%;" alt="something went wrong">


                    </div>
                    <div class="card-text">
                        <p>"Best firm ever, very professional lawyers!" - Maria </p>
                    </div>
                </div>
            </div>

        </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>


<style scoped>
#banner{
  width:100%; 
  height: 150px;  
  background-image: url('https://picsum.photos/id/378/5000/3333');
  background-size: cover;
}
</style>