from django.db import models
from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField
from django.utils.html import strip_tags

# Create your models here.


class ContactForm(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    full_name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15)
    message = RichTextField()

    def __str__(self):
        return f"{self.full_name}"

    class Meta:
        verbose_name_plural = "Contact Forms"


class EmailSubcription(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    email = models.EmailField()

    def __str__(self):
        return f"{self.email}"

    class Meta:
        verbose_name_plural = "Email Subcriptions"


class OurWorkProcess(models.Model):
    step = models.IntegerField()
    font_awesome_class = models.CharField(max_length=50, blank=True, null=True)
    title = models.CharField(max_length=50)
    description = RichTextField()

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name_plural = "Our Work Processes"


class OurClient(models.Model):
    name_of_client = models.CharField(max_length=50)
    logo = CloudinaryField()

    def __str__(self):
        return f"{self.name_of_client}"

    def get_logo_url(self):
        return (f"https://res.cloudinary.com/dkcjpdk1c/image/upload/{self.logo}")


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class OurTechnology(models.Model):
    name_of_technology = models.CharField(max_length=50)
    logo = CloudinaryField()

    def __str__(self):
        return f"{self.name_of_technology}"

    def get_logo_url(self):
        return (f"https://res.cloudinary.com/dkcjpdk1c/image/upload/{self.logo}")

    class Meta:
        verbose_name_plural = "Our Technologies"


class Service(models.Model):
    title = models.CharField(max_length=50)
    description = RichTextField()
    image = CloudinaryField()
    category = models.ManyToManyField(Category)
    technologies = models.ManyToManyField(OurTechnology, blank=True, null=True)
    slug = models.SlugField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f"{self.title}"

    def get_image_url(self):
        return (f"https://res.cloudinary.com/dkcjpdk1c/image/upload/{self.image}")

    def safe_description_html(self):
        return strip_tags(self.description)


class RecentJob(models.Model):
    title = models.CharField(max_length=50)
    summary = RichTextField()
    problem_statement = RichTextField()
    solution_offered = RichTextField()
    category = models.ManyToManyField(Category)
    technologies = models.ManyToManyField(OurTechnology, blank=True, null=True)
    slug = models.SlugField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f"{self.title}"

    def safe_summary_html(self):
        return strip_tags(self.summary)


class Pricing(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name='pricings')
    price = models.IntegerField()
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.service} - N{self.price}"


class PricingFeature(models.Model):
    pricing = models.ForeignKey(
        Pricing, on_delete=models.CASCADE, related_name='pricing_features')
    name = models.CharField(max_length=50)
    is_featured = models.BooleanField()

    def __str__(self):
        return f"{self.pricing} - N{self.name}"


class Stat(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name='stats')
    stat_figure = models.IntegerField()
    stat_title = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.stat_title} - N{self.stat_figure}"


class FAQ(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name="faqs")
    faq_question = models.CharField(max_length=50)
    faq_answer = RichTextField()


class OurIndustry(models.Model):
    name_of_industry = models.CharField(max_length=50)
    logo = CloudinaryField()

    def __str__(self):
        return f"{self.name_of_industry}"

    def get_logo_url(self):
        return (f"https://res.cloudinary.com/dkcjpdk1c/image/upload/{self.logo}")

    class Meta:
        verbose_name_plural = "Our Industries"


class Testimonial(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    message = RichTextField()
    image = CloudinaryField()

    def __str__(self):
        return f"{self.name} - {self.position}"

    def get_image_url(self):
        return (f"https://res.cloudinary.com/dkcjpdk1c/image/upload/{self.image}")


class CompanyInfo(models.Model):
    pass


class OurTeam(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = CloudinaryField()

    def __str__(self):
        return f"{self.name} - {self.position}"

    def get_image_url(self):
        return (f"https://res.cloudinary.com/dkcjpdk1c/image/upload/{self.image}")


class SocialUrl(models.Model):
    team_member = models.OneToOneField(
        OurTeam, related_name='team_social', on_delete=models.CASCADE, blank=True, null=True)
    company = models.OneToOneField(
        CompanyInfo, related_name='company_social', on_delete=models.CASCADE, blank=True, null=True)
    facebook_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    youtube_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.facebook_url}"
