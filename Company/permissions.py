from rest_framework.permissions import BasePermission


class IsFrontend(BasePermission):
    """
    Custom permission to allow only requests from the React frontend.
    """

    def has_permission(self, request, view):
        # You can check the request's headers or any other relevant information
        # to determine if it's coming from your React frontend.
        # If it is, return True; otherwise, return False.

        # Example: Check for a custom header "X-Frontend-Request" set in your React code.
        return request.META.get('HTTP_X_FRONTEND_REQUEST') == 'true'
