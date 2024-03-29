from django.db import models
from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField
from django.utils.html import strip_tags
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

# Create your models here.
cloudinary_url = "https://res.cloudinary.com/dkcjpdk1c/image/upload/"


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
        return f"{cloudinary_url}{self.logo}"


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class OurTechnology(models.Model):
    name_of_technology = models.CharField(max_length=50)
    get_logo_url = models.URLField(default='https://bit.ly/3u7pAe0')

    def __str__(self):
        return f"{self.name_of_technology}"

    class Meta:
        verbose_name_plural = "Our Technologies"


class Service(models.Model):
    title = models.CharField(max_length=50)
    description = RichTextField()
    image = CloudinaryField()
    hero_image = CloudinaryField(blank=True, null=True)
    hero_snippet = models.TextField(blank=True, null=True)
    category = models.ManyToManyField(Category)
    technologies = models.ManyToManyField(OurTechnology, blank=True, null=True)
    slug = models.SlugField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f"{self.title}"

    def get_image_url(self):
        return f"{cloudinary_url}{self.image}"

    def get_hero_image_url(self):
        return f"{cloudinary_url}{self.hero_image}"

    def safe_description_html(self):
        return strip_tags(self.description)


class OurIndustry(models.Model):
    name_of_industry = models.CharField(max_length=50)
    get_logo_url = models.URLField(default='')

    def __str__(self):
        return f"{self.name_of_industry}"

    class Meta:
        verbose_name_plural = "Our Industries"


class RecentJob(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField(blank=True, null=True)
    image = CloudinaryField(blank=True, null=True)
    summary = RichTextField()
    problem_statement = RichTextField()
    solution_offered = RichTextField()
    category = models.ManyToManyField(Category)
    technologies = models.ManyToManyField(OurTechnology, blank=True, null=True)
    industry = models.ManyToManyField(OurIndustry, blank=True, null=True)
    location = models.CharField(max_length=30, blank=True, null=True)
    slug = models.SlugField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f"{self.title}"

    def safe_summary_html(self):
        return strip_tags(self.summary)

    def get_image_url(self):
        return f"{cloudinary_url}{self.image}"


class RecentJobStatement(models.Model):
    recent_job = models.ForeignKey(
        RecentJob, related_name="recent_job_statement", on_delete=models.CASCADE)
    pic = CloudinaryField('image')
    title = models.CharField(
        max_length=50, help_text="Should be Problem Statement or Solutions Offered")
    description = RichTextField()

    def get_image_url(self):
        return f"{cloudinary_url}{self.pic}"

    def __str__(self):
        return f"{self.title}"


class Pricing(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name='pricings')
    price = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.service} - {self.title} - N{self.price}"


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


class Testimonial(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    message = RichTextField()
    image = CloudinaryField()

    def __str__(self):
        return f"{self.name} - {self.position}"

    def get_image_url(self):
        return f"{cloudinary_url}{self.image}"


class CompanyInfo(models.Model):
    logo = CloudinaryField(null=True, blank=True)
    get_page_header_image = models.URLField(default="")
    company_name = models.CharField(max_length=100, null=True, blank=True)
    company_address = models.CharField(
        max_length=255, null=True, blank=True)
    telephone = models.CharField(max_length=15, validators=[
        RegexValidator(r'^\d{11}$', 'Enter a valid phone number.')], null=True, blank=True)
    telephone_2 = models.CharField(max_length=15, null=True, blank=True, validators=[
        RegexValidator(r'^\d{11}$', 'Enter a valid phone number.')])
    email = models.EmailField(null=True, blank=True)
    about_company = RichTextField(blank=True, null=True)
    return_policy = RichTextField(blank=True, null=True)
    term_and_conditions = RichTextField(blank=True, null=True)
    privacy_policy = RichTextField(blank=True, null=True)
    testimonial_frame = CloudinaryField(null=True, blank=True)
    career_benefits = RichTextField(null=True, blank=True)

    def get_logo(self):
        return f"{cloudinary_url}{self.logo}"

    def get_testimonial_frame(self):
        return f"{cloudinary_url}{self.testimonial_frame}"


class OurTeam(models.Model):
    name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = CloudinaryField()

    def __str__(self):
        return f"{self.name} - {self.position}"

    def get_image_url(self):
        return f"{cloudinary_url}{self.image}"


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
    whatsapp_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.team_member} {self.company} Social URLs"

    def clean(self):
        if self.team_member and self.company:
            raise ValidationError(
                "Only one of team_member and company can be selected.")


class FAQ(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name="faqs", blank=True, null=True)
    company = models.ForeignKey(
        CompanyInfo, related_name='company_faqs', on_delete=models.CASCADE, blank=True, null=True)
    faq_question = models.CharField(max_length=50)
    faq_answer = RichTextField()

    def __str__(self):
        return f"{self.service} {self.company} - {self.faq_question}"

    def clean(self):
        if self.service and self.company:
            raise ValidationError(
                "Only one of service and company can be selected.")


class CoreValue(models.Model):
    pic_url = models.URLField(
        default='https://img.freepik.com/premium-photo/compass-with-arrow-marks-word-mission_207634-2241.jpg?size=626&ext=jpg&ga=GA1.1.1699289041.1668069491&semt=ais')
    title = models.CharField(max_length=50)
    description = RichTextField()

    def __str__(self):
        return f"{self.title}"


class JobOpening(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    number_of_openings = models.IntegerField()
    job_title = models.CharField(max_length=225)
    location = models.CharField(max_length=225)
    years_of_experience = models.CharField(max_length=225)
    skills = models.CharField(max_length=225)
    qualification = models.CharField(max_length=225, null=True, blank=True)
    roles = RichTextField()
    slug = models.SlugField(max_length=250, blank=True, null=True)

    def __str__(self):
        return f"{self.job_title}"


class JobOpeningApplication(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    job = models.ForeignKey(JobOpening, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=225)
    phone_number = models.CharField(max_length=11, validators=[
                                    RegexValidator(r'^\d{11}$', 'Enter a valid phone number.')])
    email = models.EmailField(max_length=255)
    qualification = models.CharField(max_length=225)
    years_of_experience = models.IntegerField()
    cover_letter = CloudinaryField()
    resume = CloudinaryField()

    def __str__(self):
        return f"{self.job} - {self.full_name}"
