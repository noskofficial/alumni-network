<template>
  <div
    class="flex flex-col md:flex-row w-[95%] md:w-[90%] lg:w-[85%] xl:w-[65%] mx-auto py-10 flex-wrap justify-between gap-x-16">
    <!-- social media section -->
    <div class="md:w-[25%] mt-2">
      <h2 class="text-2xl mb-6">Social Media</h2>
      <ul class="flex flex-col">
        <li>
          <a href="#">
            <Icon name="uil:twitter" color="white" class="mr-2" size="20" /> twitter
          </a>
        </li>
        <li>
          <a href="#">
            <Icon name="uil:youtube" color="white" class="mr-2" size="20" />youtube
          </a>
        </li>
        <li>
          <a href="#">
            <Icon name="uil:facebook" color="white" class="mr-2" size="20" /> facebook
          </a>
        </li>
        <li>
          <a href="#">
            <Icon name="uil:linkedin" color="white" class="mr-2" size="20" />linkedin
          </a>
        </li>
        <li>
          <a href="#">
            <Icon name="uil:instagram" color="white" class="mr-2" size="20" />instagram
          </a>
        </li>
      </ul>
    </div>

    <!-- get help section -->
    <div class="mt-2 flex-grow">
      <h2 class="text-2xl mb-6">Get Help</h2>
      <ul class="flex flex-col">
        <li>
          <a href="#">
            Contact the alumni service desk
          </a>
        </li>
        <li>
          <a href="#">
            Claim your NCIT ALUMNIKEY
          </a>
        </li>
        <li>
          <a href="#">
            Get help searching the alumni directory
          </a>
        </li>
        <li>
          <a href="#">
            View all contacts
          </a>
        </li>
        <li>
          <a href="#">
            View all help pages
          </a>
        </li>
      </ul>
    </div>

    <!-- about this site section -->
    <div class="md:w-[25%] mt-2">
      <h2 class="text-2xl mb-6">About This Site</h2>
      <ul class="flex flex-col">
        <li>
          <a href="#">
            Accessibility
          </a>
        </li>
        <li>
          <a href="#">
            Privacy
          </a>
        </li>
        <li>
          <a href="#">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#">
            Feedback
          </a>
        </li>
        <li>
          <a href="#">
            Go to ncit.edu.np
          </a>
        </li>
        <li>
          <a href="#">
            Admin Profile
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
li {
  border-bottom: 1px solid #f5f5f5;
  padding: 0.5rem 0;
  font-weight: 100;
  text-transform: uppercase;
  font-size: 0.8rem;
}

li a {
  display: flex;
  align-items: center;
}
</style>