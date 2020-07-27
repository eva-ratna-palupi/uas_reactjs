import React from 'react';

const Footer = () => {
    return (
        <div>
            <br/><br/>
            <section class="ftco-section bg-light">
                <div class="container">
                    <div class="row no-gutters ftco-services">
                        <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-shipped"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Free Shipping</h3>
                                    <span>On order over Rp. 100.000</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-diet"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Always Fresh</h3>
                                    <span>Product well package</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-award"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Superior Quality</h3>
                                    <span>Quality Products</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-customer-service"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Support</h3>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="ftco-footer ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="mouse">
                            <a href="#" class="mouse-icon">
                                <div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
                            </a>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Becerin</h2>
                                <p>Aplikasi Penjualan Inventory Toko Buah Olnine</p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                                    <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                                    <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4 ml-md-5">
                                <h2 class="ftco-heading-2">Menu</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#" class="py-2 d-block"></a></li>
                                    <li><a href="#" class="py-2 d-block">About</a></li>
                                    <li><a href="#" class="py-2 d-block">Produk</a></li>
                                    <li><a href="#" class="py-2 d-block">Barang</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Help</h2>
                                <div class="d-flex">
                                    <ul class="list-unstyled mr-l-5 pr-l-3 mr-4">
                                        <li><a href="#" class="py-2 d-block">Shipping Information</a></li>
                                        <li><a href="#" class="py-2 d-block">Returns &amp; Exchange</a></li>
                                        <li><a href="#" class="py-2 d-block">Terms &amp; Conditions</a></li>
                                        <li><a href="#" class="py-2 d-block">Privacy Policy</a></li>
                                    </ul>
                                    <ul class="list-unstyled">
                                        <li><a href="#" class="py-2 d-block">FAQs</a></li>
                                        <li><a href="#" class="py-2 d-block">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Have a Questions?</h2>
                                <div class="block-23 mb-3">
                                    <ul>
                                        <li><span class="icon icon-map-marker"></span><span class="text">Jl. Balai Desa Kalicupak Kidul RT 06 RW 01 Banyumas, Jawa Tengah, Indonesia</span></li>
                                        <li><a href="#"><span class="icon icon-phone"></span><span class="text">+62 83139 429333</span></a></li>
                                        <li><a href="#"><span class="icon icon-envelope"></span><span class="text">evaratnapalupi @gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">

                            <p>
						  Copyright <script>document.write(new Date().getFullYear());</script> All rights reserved <i class="icon-heart color-danger" aria-hidden="true"></i> by Eva Ratna Palupi
                               
						</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
