function CategoryCtrl( $scope, $http, $window ) {
    
    $scope.categories = [];
    
    $scope.category = {
        id: 0,
        name: '',
        slug: ''
    };
    
    var init = function() {
        $scope.categories = [
            {
                id: 1,
                name: 'TestCategory',
                slug: 'TestSlug'
            },
            {
                id: 2,
                name: 'TestCategory2',
                slug: 'TestSlug2'
            }
        ];
    };
    
    
    $scope.save = function() {
        $scope.categories.push({
            id: $scope.category.id + 1,
            name: $scope.category.name,
            slug: $scope.category.slug
        });
    };
    
    init();
    
}