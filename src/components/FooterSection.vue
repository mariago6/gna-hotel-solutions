<script setup>
import footerLogo from '../assets/logo-gnahs.png'
</script>

<template>
  <footer class="footer">
    <div class="footer-logo">
      <img
        :src="footerLogo"
        alt="GNA Hotel Solutions"
        class="footer-logo-image"
      />
    </div>

    <div class="footer-links">
      <ul>
        <li><a href="#">Contacte</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Treballa amb nosaltres</a></li>
      </ul>

      <ul>
        <li><a href="#">Política de cookies</a></li>
        <li><a href="#">Política de privacitat</a></li>
        <li><a href="#">Avís legal</a></li>
      </ul>
    </div>

    <p class="credits">
      Desenvolupat per <strong>GNA Hotel Solutions</strong>
    </p>
  </footer>
</template>