import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';

export const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <nav>
            <h1>Solana Starter App</h1>

    <div class="header-line-wrapper">
        <header class="header-wrapper fixed-top plr100">
            <div class="table height-100p">
                <div class="table-row">
                    <div class="table-cell valign-middle text-left">
                        <a href="index.html" class="logo">
                            <img src="../assets/images/logo.png" alt="" class="img-responsive inline-block">
                        </a>
                    </div>
                    <div class="table-cell valign-top text-center vm-sm">
                        <div class="main-menu">
                            <span class="toggle_menu">
                                <span></span>
                            </span>
                            <ul class="menu clearfix">
                                <li class="inline-block active">
                                    <a href="index.html">
                                        Homepage
                                    </a>
                                </li>
                                <li class="inline-block menu-item-has-children">
                                    <a href="#">
                                        Project Details
                                    </a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a href="#roadmap">Roadmap</a>
                                        </li>
										<li>
                                            <a href="#mintingdetails">Minting Details</a>
                                        </li>
                                        <li>
                                            <a href="#abouttheteam">About The Team</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="team.html">Team</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <a href="single-team.html">Sub Menu Item</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">White Paper</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="inline-block menu-item-has-children">
                                    <a href="#">
                                        NFT Characters
                                    </a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a href="#characters">The Sniper</a>
                                        </li>
                                        <li>
                                            <a href="#characters">Special Forces</a>
                                        </li>
                                        <li>
                                            <a href="#characters">Heavy Artillery</a>
                                        </li>
                                        <li>
                                            <a href="#characters">Assault Eletist</a>
                                        </li>
                                        <li>
                                            <a href="#characters">Tactical Infantry</a>
                                        </li>
                                    </ul>
                                </li>
                               
                                <li class="inline-block">
                                    <a href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li class="inline-block">
                                    <a href="#tearmsandconditions">
                                        Terms & Conditions
                                    </a>
									<a href="#tearmsandconditions">
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

                <WalletMultiButton />
                {wallet && <WalletDisconnectButton />}
            </div>
        </nav>
    );
};
