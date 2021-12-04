//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./LERC20.sol";

contract EasyTokenWithLSS is LERC20 {

    uint public totalTokensAmount = 10000000;

    bool public paused = false;

    address public pauser;

    event Paused();
    event Unpaused();

    constructor() LERC20(
        totalTokensAmount  * (10 ** 18),
        "EASY_WITH_LSS",
        "EASY_WITH_LSS",
        0x5ecd0cf81Cee8132F33Aa6142Af0E091aC5d7Cb4,
        0x5ecd0cf81Cee8132F33Aa6142Af0E091aC5d7Cb4,
        86400,
        0x6d5D09f1B2616133bC47C39fA615A1c2D3Aa49dB)
    {
        pauser = _msgSender();
    }

    function changePauser(address pauser_) external {
        require(_msgSender() == pauser, "Invalid access");
        pauser = pauser_;
    }

    function pause() external {
        require(_msgSender() == pauser, "Invalid access");
        paused = true;
        emit Paused();
    }

    function unpause() external {
        require(_msgSender() == pauser, "Invalid access");
        paused = false;
        pauser = address(0); //Can only be paused once
        emit Unpaused();
    }


    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    )
        internal override
    {
        require(!paused, "Transfer is paused");
        super._transfer(sender, recipient, amount);
    }
}